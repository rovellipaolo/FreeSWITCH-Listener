/**
 * Channel model.
 */

const buildFrom = (rawEvent) => {
	return {
		name: rawEvent.getHeader('Channel-Name'),
		state: rawEvent.getHeader('Channel-State'),
		stateNumber: rawEvent.getHeader('Channel-State-Number'),
	};
};


exports.buildFrom = buildFrom;
