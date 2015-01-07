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
		var a = injector.get(A);
		// assert
		expect(a).not.toBeUndefined();
		expect(a.b).not.toBeUndefined();
	});

	it('should execute "do" in A & B', ()=>{
		// arrange 
		var injector = new Injector();
		var a = injector.get(A);
		// act
		a.do();
		// assert
		expect(a.isDoExecuted).toBe(true);
		expect(a.b.isDoExecuted).toBe(true);
	});
});
