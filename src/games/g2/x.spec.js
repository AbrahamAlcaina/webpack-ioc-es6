'use strict';
import X from './x';
import {Injector} from '../../di';

describe('test', ()=>{
	it('test injector', ()=>{
		// arrange
		let injector = new Injector();
		class Config {};
		// act
		let x = injector.get(X);
		// arrange
		expect(x).not.toBeUndefined();
		expect(x.y).not.toBeUndefined();
		//expect(x.config).not.toBeUndefined();
	});
});