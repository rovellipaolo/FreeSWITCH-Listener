/**
 * Channel destroy model.
 */

const Caller = require('./caller');
const Codec = require('./codec');
const GenericEvent = require('./event');
const Originatee = require('./originatee');


const EVENT_NAME = 'CHANNEL_HANGUP';


const buildFrom = (rawEvent) => {
	const channelHangup = GenericEvent.buildFrom(rawEvent);

	channelHangup.codec = Codec.buildFrom(rawEvent);
	channelHangup.caller = Caller.buildFrom(rawEvent);
	channelHangup.originatee = Originatee.buildFrom(rawEvent);

	channelHangup.hangupCause = rawEvent.getHeader('Hangup-Cause');

	return channelHangup;
};


exports.EVENT_NAME = EVENT_NAME;
exports.buildFrom = buildFrom;
