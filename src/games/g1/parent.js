'use strict';
import {Inject} from '../../di';
import Part from './part';


export default class Parent {
	constructor(@Inject(Part) part, config){
		this.part = part;
		this.config = config;
	}
}