/**
 * Caller model.
 */

const buildFrom = (rawEvent) => {
	return {
		callerIdName: rawEvent.getHeader('Caller-Caller-ID-Name'),
		callerIdNumber: rawEvent.getHeader('Caller-Caller-ID-Number'),
		channelName: rawEvent.getHeader('Caller-Channel-Name'),
		context: rawEvent.getHeader('Caller-Context'),
		destinationNumber: rawEvent.getHeader('Caller-Destination-Number'),
		dialplan: rawEvent.getHeader('Caller-Dialplan'),
		networkAddr: rawEvent.getHeader('Caller-Network-Addr'),
		privacyHideName: rawEvent.getHeader('Caller-Privacy-Hide-Name'),
		privacyHideNumber: rawEvent.getHeader('Caller-Privacy-Hide-Number'),
		screenBit: rawEvent.getHeader('Caller-Screen-Bit'),
		source: rawEvent.getHeader('Caller-Source'),
		uniqueId: rawEvent.getHeader('Caller-Unique-ID'),
		username: rawEvent.getHeader('Caller-Username'),
	};
};


exports.buildFrom = buildFrom;
