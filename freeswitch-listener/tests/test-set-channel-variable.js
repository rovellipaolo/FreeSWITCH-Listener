/**
 * Test EventSocketMonitor.
 */

const test = require('tap').test;
const JsMockito = require('jsmockito').JsMockito;
const mock = JsMockito.mock;
const verify = JsMockito.verify;

const FreeswitchApi = require('../apis/freeswitch');
const FreeswitchApiMock = mock(FreeswitchApi);

const mockRequire = require('mock-require');
mockRequire('../apis/freeswitch', FreeswitchApiMock);


// Subject Under Test:
const sut = require('../use-cases/set-channel-variable');


// Tests:

test('execute', (t) => {
	const anyCallerIdNumber = '123456789';
	const anyUuid = '000';
	const anyVariable = 'variable';
	const anyValue = 'value';

	sut.execute(anyCallerIdNumber, anyUuid, anyVariable, anyValue);

	verify(FreeswitchApiMock).executeWithOkResult(anyCallerIdNumber, `uuid_setvar ${anyUuid} ${anyVariable} '${anyValue}'`);
	t.end();
});
