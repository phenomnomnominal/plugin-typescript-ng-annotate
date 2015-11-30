'use strict';

// Dependencies:
import ngAnnotate from 'ng-annotate';
import { translate as translateTS } from 'plugin-typescript';

export function translate (load) {
	return translateTS(load)
	.then((load) => {
		let annotate = ngAnnotate(load.source);
		return load;
	});
}
