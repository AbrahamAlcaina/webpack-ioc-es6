'use strict';

import Parent from './parent';
import {
	Injector
}
from '../../di';

describe('mixin parameters in constructor', () => {
	it('should create parent without injection', () => {
		// arrange 
		let partMock = {};
		let config = {};
		// act
		let sut = new Parent(partMock, config);
		// assert
		expect(sut).not.toBeUndefined();
		expect(sut.part).toEqual(partMock);
		expect(sut.config).toEqual(config);
	});

	it('should create parent with injection', () => {
		// arrange
		let injector = new Injector();
		// act
		let sut = injector.get(Parent);
		// assert
		expect(sut).not.toBeUndefined();
		expect(sut.part).not.toBeUndefined();
		expect(sut.config).toBeUndefined();
	});

	it('should create parent with injection and config variables', () => {
		// arrange
		let config = {
			x: 10,
			y: 20
		};
		let injector = new Injector();
		// act
		let sut = injector.get(Parent, config);
		// assert
		expect(sut).not.toBeUndefined();
		expect(sut.part).not.toBeUndefined();
		expect(sut.config).toEqual(config);
	});

});
