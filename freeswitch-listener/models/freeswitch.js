/**
 * FreeSWITCH model.
 */

const buildFrom = (rawEvent) => {
	return {
		hostname: rawEvent.getHeader('FreeSWITCH-Hostname'),
		ipV4: rawEvent.getHeader('FreeSWITCH-IPv4'),
		ipV6: rawEvent.getHeader('FreeSWITCH-IPv6'),
	};
};


exports.buildFrom = buildFrom;
