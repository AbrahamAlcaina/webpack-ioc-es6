'use strict';

import {Injector} from '../../di';
import A from 'a.js';

function main(){
	var injector = new Injector();
	var a = injector.get(A);
	a.do();
}