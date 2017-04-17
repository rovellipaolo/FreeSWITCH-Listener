/**
 * Channel create model.
 */

const Channel = require('./channel');
const GenericEvent = require('./event');
const Freeswitch = require('./freeswitch');


const EVENT_NAME = 'CHANNEL_CREATE';


const buildFrom = (rawEvent) => {
	const channelCreate = GenericEvent.buildFrom(rawEvent);

	channelCreate.channel = Channel.buildFrom(rawEvent);
	channelCreate.freeswitch = Freeswitch.buildFrom(rawEvent);

	channelCreate.answerState = rawEvent.getHeader('Answer-State');
	channelCreate.callDirection = rawEvent.getHeader('Call-Direction');
	channelCreate.coreUuid = rawEvent.getHeader('Core-UUID');
	channelCreate.presenceCallDirection = rawEvent.getHeader('Presence-Call-Direction');
	channelCreate.uniqueId = rawEvent.getHeader('Unique-ID');

	return channelCreate;
};


exports.EVENT_NAME = EVENT_NAME;
exports.buildFrom = buildFrom;
