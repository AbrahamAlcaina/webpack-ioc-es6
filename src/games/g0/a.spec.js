'use strict';

import {
	Injector
}
from '../../di';
import A from './a';

describe('test annotations', () => {
	it('should create an A class', () => {
		// arrange
		var injector = new Injector();
		// act
		var sut = injector.get(A);
		// assert
		expect(sut).not.toBeUndefined();
		expect(sut.b).not.toBeUndefined();
	});

	it('should create an A class with stub', () => {
		// arrange
		var stub = {};
		// act
		var sut = new A(stub);
		// assert
		expect(sut).not.toBeUndefined();
		expect(sut.b).not.toBeUndefined();
		expect(sut.b).toEqual(stub);
	});

	it('should execute "do" in A & B', () => {
		// arrange 
		var injector = new Injector();
		var a = injector.get(A);
		// act
		a.do();
		// assert
		expect(a.isDoExecuted).toBe(true);
		expect(a.b.isDoExecuted).toBe(true);
	});

	it('should execute "do" in A & the injected mock', () => {
		// arrange
		var mock = { do: ()=>{}};
		spyOn(mock, 'do');
		var sut = new A(mock);
		// act
		
		sut.do();
		// assert
		expect(mock.do).toHaveBeenCalled();
	});
});
