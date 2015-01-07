'use strict';

export default class C {
	constructor(){
		this.isDoExecuted = false;		
	}

	do(){
		console.log('C');
		this.isDoExecuted = true;
	}
}