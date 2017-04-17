/**
 * FreeSWITCH event socket monitor.
 */

const Log = require('winston');

const FreeswitchApi = require('../apis/freeswitch');
const EventFactory = require('../models/event-factory');
const ChannelObserver = require('../observers/channel-observer');


const RETRY_TIMEOUT_IN_MILLIS = 10000;


const startJob = () => {
	FreeswitchApi.connect()
	.then(connection => {
		connection.subscribe(FreeswitchApi.ALL_EVENTS);

		connection.on(FreeswitchApi.Event.RECEIVED, rawEvent => {
			const channelEvent = EventFactory.buildEvent(rawEvent);

			if (channelEvent !== null && channelEvent.name !== null) {
				ChannelObserver.notify(channelEvent);
			}
		});
	})
	.catch(() => {
		Log.error(`Error connecting to FreeSWITCH. Retrying in ${RETRY_TIMEOUT_IN_MILLIS} millis...`);
		setTimeout(startJob, RETRY_TIMEOUT_IN_MILLIS);
	});
};


exports.startJob = startJob;
