/**
 * Originatee model.
 */

const buildFrom = (rawEvent) => {
	return {
		callerIdName: rawEvent.getHeader('Originatee-Caller-ID-Name'),
		callerIdNumber: rawEvent.getHeader('Originatee-Caller-ID-Number'),
		channelName: rawEvent.getHeader('Originatee-Channel-Name'),
		context: rawEvent.getHeader('Originatee-Context'),
		destinationNumber: rawEvent.getHeader('Originatee-Destination-Number'),
		dialplan: rawEvent.getHeader('Originatee-Dialplan'),
		networkAddr: rawEvent.getHeader('Originatee-Network-Addr'),
		privacyHideName: rawEvent.getHeader('Originatee-Privacy-Hide-Name'),
		privacyHideNumber: rawEvent.getHeader('Originatee-Privacy-Hide-Number'),
		screenBit: rawEvent.getHeader('Originatee-Screen-Bit'),
		source: rawEvent.getHeader('Originatee-Source'),
		uniqueId: rawEvent.getHeader('Originatee-Unique-ID'),
		username: rawEvent.getHeader('Originatee-Username'),
	};
};


exports.buildFrom = buildFrom;
