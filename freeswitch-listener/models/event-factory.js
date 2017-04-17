/**
 * Event factory.
 */

const ChannelCreate = require('../models/channel-create');
const ChannelHangup = require('../models/channel-hangup');
const Dtmf = require('../models/dtmf');
const GenericEvent = require('./event');


const buildEvent = (rawEvent) => {
	const eventName = rawEvent.getHeader('Event-Name');

	switch (eventName) {
		case ChannelCreate.EVENT_NAME:
			return ChannelCreate.buildFrom(rawEvent);

		case ChannelHangup.EVENT_NAME:
			return ChannelHangup.buildFrom(rawEvent);

		case Dtmf.EVENT_NAME:
			return Dtmf.buildFrom(rawEvent);

		default:
			return GenericEvent.buildFrom(rawEvent);
	}
};


exports.buildEvent = buildEvent;
