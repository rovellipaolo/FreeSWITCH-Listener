/**
 * Channel event observer.
 */

const Log = require('winston');

const ChannelCreate = require('../models/channel-create');
const ChannelHangup = require('../models/channel-hangup');


/**
 * Notify a Channel-related event.
 *
 * @param event  The Event Socket event.
 */
const notify = (event) => {
	switch (event.name) {
		case ChannelCreate.EVENT_NAME:
			Log.info(`New Channel Create event: ${JSON.stringify(event)}`);
			break;

		case ChannelHangup.EVENT_NAME:
			Log.info(`New Channel Hangup event: ${JSON.stringify(event)}`);
			break;

		default:
			// Unhandled event... nothing to do!
			break;
	}
};


exports.notify = notify;
