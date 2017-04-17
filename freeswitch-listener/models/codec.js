/**
 * Codec model.
 */

const buildFrom = (rawEvent) => {
	return {
		channelReadCodecName: rawEvent.getHeader('Channel-Read-Codec-Name'),
		channelReadCodecRate: rawEvent.getHeader('Channel-Read-Codec-Rate'),
		channelWriteCodecName: rawEvent.getHeader('Channel-Write-Codec-Name'),
		channelWriteCodecRate: rawEvent.getHeader('Channel-Write-Codec-Rate'),
	};
};


exports.buildFrom = buildFrom;
