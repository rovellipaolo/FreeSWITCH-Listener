/**
 * FreeSWITCH API.
 */

const ESL = require('modesl');
const Log = require('winston');

const FreeswitchConfig = require('../config/config').getConfig('freeswitch');


const Event = {
	Connection: {
		READY: 'esl::ready',
		CLOSED: 'esl::end',
		ERROR: 'error',
	},
	RECEIVED: 'esl::event::*::*',
};
const ALL_EVENTS = 'all';
const RESPONSE_SUCCESS = '+OK';

let connection = null;


/**
 * Connect to Event Socket or return the existing connection.
 *
 * @return Promise contanining the current ESL connection.
 */
const connect = () => new Promise((resolve, reject) => {
	if (connection !== null && connection.connected()) {
		resolve(connection);
	} else {
		Log.info('Opening new FreeSWITCH event socket connection...');

		connection = new ESL.Connection(FreeswitchConfig.ip, FreeswitchConfig.port, FreeswitchConfig.password);

		connection.on(Event.Connection.ERROR, () => {
			Log.error('Error connecting to FreeSWITCH!');
			reject('Connection error');
		});

		connection.on(Event.Connection.CLOSED, () => {
			Log.error('Connection to FreeSWITCH closed!');
			reject('Connection closed');
		});

		connection.on(Event.Connection.READY, () => {
			Log.info('Connection to FreeSWITCH established!');
			resolve(connection);
		});
	}
});

/**
 * Execute a FreeSWITCH command through Event Socket.
 * NOTE: The returned Promise is resolved no matter the response.
 *       Use executeWithOkResult if you are interested only in successful responses.
 *
 * @return The body of the response, or an error.
 */
const execute = (callerIdNumber, command) => new Promise((resolve, reject) => {
	Log.info(`[${callerIdNumber}] Executing command: ${command}`);

	connect()
	.then(connection => {
		connection.bgapi(command, response => {
			const responseBody = response.getBody();
			resolve(responseBody);
		});
	})
	.catch(error => {
		Log.error(`[${callerIdNumber}] Error executing command '${command}': ${error.trim()}`);
		reject(error);
	});
});

const isSuccessfulResponse = (response) => {
	return response.indexOf(RESPONSE_SUCCESS) === 0;
};

/**
 * Execute a FreeSWITCH command through Event Socket.
 * NOTE: The returned Promise is resolved only if the response is successful.
 *
 * @return The body of the response, or an error.
 */
const executeWithOkResult = (callerIdNumber, command) => new Promise((resolve, reject) => {
	execute(callerIdNumber, command)
	.then(response => {
		if (isSuccessfulResponse(response)) {
			Log.info(`[${callerIdNumber}] Command '${command}' executed successfully: ${response.trim()}`);
			resolve(response);
		} else {
			Log.error(`[${callerIdNumber}] Error executing command '${command}': ${response.trim()}`);
			reject(response);
		}
	})
	.catch(error => {
		reject(error);
	});
});


exports.ALL_EVENTS = ALL_EVENTS;
exports.Event = Event;
exports.connect = connect;
exports.execute = execute;
exports.executeWithOkResult = executeWithOkResult;
