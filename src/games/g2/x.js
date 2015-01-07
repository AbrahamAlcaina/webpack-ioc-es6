'use strict';
import {Inject} from '../../di';
import Y from './y';

@Inject(Y)
export default class X {
	constructor(y, config){
		this.y = y;
		this.config = config;
	}
}