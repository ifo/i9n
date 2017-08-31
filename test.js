'use strict';

let i9n = require('./i9n');
let test = require('tape');

test('i9n string tests', (t) => {
  t.equal(i9n.i9n('i18n'), 'i2n');
  t.equal(i9n.i9n('word'), 'w2d');
  t.equal(i9n.i9n('I'), 'I-1I');
  t.equal(i9n.i9n(''), '-2');
  t.end();
});

test('i9n non-alphanumeric', (t) => {
  t.equal(i9n.i9n('...'), '...');
  t.equal(i9n.i9n('end.'), 'e1d.');
  t.equal(i9n.i9n('"quoted"'), '"q4d"');
  t.equal(i9n.i9n('int.ernal'), 'i7l');
  t.end();
});

test('i9n bad input tests', (t) => {
  t.equal(i9n.i9n(1), 1);
  t.equal(i9n.i9n(10), 10);
  t.equal(i9n.i9n(), undefined);
  t.equal(i9n.i9n(null), null);
  t.end();
});
