'use strict';

import {
	Injector
}
from '../../di';
import A from './a';

describe('first test', () => {
	it('t0', () => {
		var injector = new Injector();
		var a = injector.get(A);
		expect(a).not.toBeUndefined();
	});
});
