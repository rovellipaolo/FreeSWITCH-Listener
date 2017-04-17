/**
 * Test EventSocketMonitor.
 */

const test = require('tap').test;
const JsMockito = require('jsmockito').JsMockito;
const mock = JsMockito.mock;
const when = JsMockito.when;
const verify = JsMockito.verify;
const JsHamcrest = require('jshamcrest').JsHamcrest;
const anything = JsHamcrest.Matchers.anything;

const FreeswitchApi = require('../apis/freeswitch');
const FreeswitchApiMock = mock(FreeswitchApi);

const mockRequire = require('mock-require');
mockRequire('../apis/freeswitch', FreeswitchApiMock);


// Subject Under Test:
const sut = require('../use-cases/get-channel-variable');


const mockResolvedPromise = (result = null) => new Promise((resolve) => {
	if (result !== null) {
		resolve(result);
	} else {
		resolve();
	}
});

const givenFreeswitchUuidGetvarWillReturn = (value) => {
	when(FreeswitchApiMock).execute(anything(), anything()).thenReturn(mockResolvedPromise(value));
};


// Tests:

test('execute', (t) => {
	const anyCallerIdNumber = '123456789';
	const anyUuid = '000';
	const anyVariable = 'variable';

	sut.execute(anyCallerIdNumber, anyUuid, anyVariable);

	verify(FreeswitchApiMock).execute(anyCallerIdNumber, `uuid_getvar ${anyUuid} ${anyVariable}`);
	t.end();
});

test('executeIsCorrectlyResolved', (t) => {
	const anyCallerIdNumber = '123456789';
	const anyUuid = '000';
	const anyVariable = 'variable';
	const anyValue = 'value';
	givenFreeswitchUuidGetvarWillReturn(anyValue);

	sut.execute(anyCallerIdNumber, anyUuid, anyVariable)
	.then(value => {
		t.equal(value, anyValue, 'Channel variable value is correct');
		t.end();
	})
	.catch(() => {
		t.ok(false, 'GetChannelVariable.execute() raises an exception');
		t.end();
	});
});
