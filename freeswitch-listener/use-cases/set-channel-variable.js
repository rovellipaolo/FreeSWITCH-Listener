/**
 * Set channel variable use case.
 */
const Log = require('winston');

const FreeswitchApi = require('../apis/freeswitch');


/**
 * Set a channel variable with a given value.
 *
 * @param callerIdNumber  The caller ID number.
 * @param uuid  The UUID.
 * @param variable  The channel variable name.
 * @param value  The channel variable value.
 */
const execute = (callerIdNumber, uuid, variable, value) => {
	Log.info(`[${callerIdNumber}] Set channel variable: ${variable} = ${value}`);
	FreeswitchApi.executeWithOkResult(callerIdNumber, `uuid_setvar ${uuid} ${variable} '${value}'`);
};


exports.execute = execute;
