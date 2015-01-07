'use strict';

import {
	Injector
}
from '../../di';
import B from './b';

describe('test annotations', () => {
	it('should create an A class', () => {
		// arrange
		var injector = new Injector();
		// act
		var sut = injector.get(B);
		// assert
		expect(sut).not.toBeUndefined();
		expect(sut.c).not.toBeUndefined();
		expect(sut.isDoExecuted).toBe(false);
	});

	it('should create a A class with stub', () => {
		// arrange
		var stub = {
			do: () => {}
		};
		// act
		var sut = new B(stub);
		// assert
		expect(sut).not.toBeUndefined();
		expect(sut.isDoExecuted).toBe(false);		
		expect(sut.c).not.toBeUndefined();
		expect(sut.c).toEqual(stub);
	});

	it('should execute "do" in B & C', () => {
		// arrange 
		var injector = new Injector();
		var sut = injector.get(B);
		// act
		sut.do();
		// assert
		expect(sut.isDoExecuted).toBe(true);
		expect(sut.c.isDoExecuted).toBe(true);
	});

	it('should execute "do" in B and in the mock injected in the constructor', () => {
		// arrange		
		var mock = { do: () =>{}};
		spyOn(mock, 'do');
		var sut = new B(mock);
		// act
		sut.do();
		// assert
		expect(mock.do).toHaveBeenCalled();
	});
	
});
