/**
 * Config.
 */

const configParams = {
	freeswitch: {
		ip: process.env.FREESWITCH_IP || '127.0.0.1',
		port: process.env.FREESWITCH_PORT || 8021,
		password: process.env.FREESWITCH_PASSWORD || '',
	},
};


const getConfig = module => (configParams[module] !== undefined) ? configParams[module] : {};


exports.getConfig = getConfig;
