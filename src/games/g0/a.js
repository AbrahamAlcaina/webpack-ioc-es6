'use strict';
import {Inject} from '../../di';
import B from './b';

@Inject(B)
export default class A {
	constructor(b){
		this.b = b;
		this.isDoExecuted = false;
	}

	do(){
		console.log('A');
		this.b.do();
		this.isDoExecuted = true;
	}
}