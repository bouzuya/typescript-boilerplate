import assert from 'power-assert';
import add from '../src/add';

describe('add', function() {
  it('works', function() {
    assert(add(1, 2) === 3);
  });
});
