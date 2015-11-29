'use strict';

// Dependencies:
import ngAnnotate as 'ng-annotate';
import { translate: translateTS } from 'plugin-typescript';

export function translate (load) {
	return translateTS(load)
	.then((load) => {
		let annotate = ngAnnotate(load.source);
		return load;
	});
}
