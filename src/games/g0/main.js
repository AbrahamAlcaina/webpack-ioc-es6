'use strict';

import {Injector} from '../../di';
import A from './a';

export function main(){
	var injector = new Injector();
	var a = injector.get(A);
	a.do();
}