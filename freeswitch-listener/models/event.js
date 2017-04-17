/**
 * Generic event model.
 */

const buildFrom = (rawEvent) => {
	return {
		callingFile: rawEvent.getHeader('Event-Calling-File'),
		callingFunction: rawEvent.getHeader('Event-Calling-Function'),
		callingLineNumber: rawEvent.getHeader('Event-Calling-Line-Number'),
		date: {
			gmt: rawEvent.getHeader('Event-Date-GMT'),
			local: rawEvent.getHeader('Event-Date-Local'),
			timestamp: rawEvent.getHeader('Event-Date-Timestamp'),
		},
		name: rawEvent.getHeader('Event-Name'),
	};
};


exports.buildFrom = buildFrom;
