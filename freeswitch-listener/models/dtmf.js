/**
 * DTMF model.
 */

const Caller = require('./caller');
const Channel = require('./channel');
const Codec = require('./codec');
const Freeswitch = require('./freeswitch');
const GenericEvent = require('./event');


const EVENT_NAME = 'DTMF';


const buildFrom = (rawEvent) => {
	const dtmf = GenericEvent.buildFrom(rawEvent);

	const caller = Caller.buildFrom(rawEvent);
	caller.channelAnsweredTime = rawEvent.getHeader('Caller-Channel-Answered-Time');
	caller.channelCreatedTime = rawEvent.getHeader('Caller-Channel-Created-Time');
	caller.channelHangupTime = rawEvent.getHeader('Caller-Channel-Hangup-Time');
	caller.channelTransferTime = rawEvent.getHeader('Caller-Channel-Transfer-Time');
	dtmf.caller = caller;

	dtmf.channel = Channel.buildFrom(rawEvent);
	dtmf.codec = Codec.buildFrom(rawEvent);
	dtmf.freeswitch = Freeswitch.buildFrom(rawEvent);

	dtmf.answerState = rawEvent.getHeader('Answer-State');
	dtmf.callDirection = rawEvent.getHeader('Call-Direction');
	dtmf.coreUuid = rawEvent.getHeader('Core-UUID');
	dtmf.digit = rawEvent.getHeader('DTMF-Digit');
	dtmf.duration = rawEvent.getHeader('DTMF-Duration');
	dtmf.uniqueId = rawEvent.getHeader('Unique-ID');

	return dtmf;
};


exports.EVENT_NAME = EVENT_NAME;
exports.buildFrom = buildFrom;
