'use strict';

import {Inject} from '../../di';
import C from './c';

@Inject(C)
export default class B {
	constructor(c){
		this.c = c;
		this.isDoExecuted = false;
	}

	do(){
		console.log('B');
		this.c.do();
		this.isDoExecuted = true;
	}
}