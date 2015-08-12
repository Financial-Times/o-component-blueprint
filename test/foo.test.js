/*global describe, it*/

const expect = require('expect.js');

const foo = require('./../src/js/foo');

describe('Foo', function() {

	it('should initialise', function() {
		expect(foo()).to.be('bar');
	});
});
