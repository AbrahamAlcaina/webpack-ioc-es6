'use strict';

import C from './c';

describe(' expecs for C', () => {

	it('should create an C object', ()=>{
		// arrange
		// act
		var sut = new C();
		// assert
		expect(sut).not.toBeUndefined();
		expect(sut.isDoExecuted).toBe(false);
	});

	it('should execute C.do', ()=>{
		// arrange
		var sut = new C();
		// act
		sut.do();
		// assert
		expect(sut.isDoExecuted).toBe(true);
	});

});
