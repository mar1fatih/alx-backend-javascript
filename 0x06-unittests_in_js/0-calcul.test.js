const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should remove the dot in result', () => {
    assert.strictEqual(calculateNumber(2.0, 2.0), 4);
  });

  it('it should do its job normally', () => {
    assert.strictEqual(calculateNumber(1.0, 3.4), 4);
  });

  it('it should do its job normally', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('it should do its job normally', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('it should do its job normally', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('it should do its job normally', () => {
    assert.strictEqual(calculateNumber(2.6, 4.5), 8);
  });

  it('it should do its job normally', () => {
    assert.strictEqual(calculateNumber(3.6, 2.0), 6);
  });

  it('rounding a and b with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
