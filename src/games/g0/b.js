'use strict';

import {Inject} from '../../di';
import C from './c';

@Inject(C)
export default class B {
	constructor(c){
		this.c = c;
	}

	do(){
		console.log('B');
		this.c.do();
	}
}