/**
 * Get channel variable use case.
 */
const Log = require('winston');

const FreeswitchApi = require('../apis/freeswitch');


/**
 * Retrieve the value of a given channel variable.
 *
 * @param callerIdNumber  The caller ID number.
 * @param uuid  The UUID.
 * @param variable  The channel variable name.
 * @return Promise containing the channel variable value.
 */
const execute = (callerIdNumber, uuid, variable) => new Promise((resolve, reject) => {
	Log.info(`[${callerIdNumber}] Get channel variable '${variable}'`);
	FreeswitchApi.execute(callerIdNumber, `uuid_getvar ${uuid} ${variable}`)
	.then(value => {
		resolve(value);
	})
	.catch(error => {
		reject(error);
	});
});


exports.execute = execute;
