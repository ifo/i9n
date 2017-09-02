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

test('ruin various sentences', (t) => {
  t.equal(i9n.ruin('two words'), 't1o w3s');
  t.equal(i9n.ruin('Short sentence.'), 'S3t s6e.');
  t.equal(i9n.ruin('end of sentence has "quotes."'), 'e1d o0f s6e h1s "q4s."');
  t.equal(i9n.ruin('tabs	are	fine'), 't2s\ta1e\tf2e');
  t.equal(i9n.ruin(`handle
newlines fine too`), 'h4e\nn6s f2e t1o');
	t.equal(i9n.ruin(`combine	tabs spaces
and newlines	without issue`), 'c5e\tt2s s4s\na1d n6s\tw5t i3e');
  t.end();
});
