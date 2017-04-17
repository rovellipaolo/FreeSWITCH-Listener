/**
 * FreeSWITCH Listener.
 */

const Log = require('winston');

const EventSocketMonitor = require('./jobs/event-socket-monitor');

// Start listening FreeSWITCH events:
Log.info('Starting Event Socket monitor...');
EventSocketMonitor.startJob();
