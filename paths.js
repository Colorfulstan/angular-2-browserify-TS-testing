"use strict";
/**
 * Paths used within gulp-tasks.
 * a name ending with $ indicates a value used directly, other paths are directories with trailing slash
 * @example
 * paths.root =>  directory
 * paths.app.manifest$ => file
 */

let paths = {}

paths.root = __dirname + '/'
paths.frontend = __dirname + '/frontend/'
paths.backend = __dirname + '/backend/'

paths.test = paths.root + '/test'

paths.unit = {
	setup$: paths.test + '/karma-setup.ts',
	polyfills$: paths.test + '/polyfills.ts',
	specs$: paths.test + '/unit/*.ts',
	karmaConfig$: paths.test.root + 'karma.conf.js'
}

module.exports = paths