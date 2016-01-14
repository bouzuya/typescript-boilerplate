require('espower-babel')({
  cwd: process.cwd(),
  pattern: '.tmp/test/**/*-test.js',
  espowerOptions: {
    patterns: [
      'assert(value, [message])',
      'assert.ok(value, [message])',
      'assert.equal(actual, expected, [message])',
      'assert.notEqual(actual, expected, [message])',
      'assert.strictEqual(actual, expected, [message])',
      'assert.notStrictEqual(actual, expected, [message])',
      'assert.deepEqual(actual, expected, [message])',
      'assert.notDeepEqual(actual, expected, [message])'
    ]
  },
  babelrc: {
    presets: ['es2015'],
    plugins: ['transform-es2015-modules-commonjs']
  }
});