const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('when type == "SUM"', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 3.0), 5);
    });

    it('equal another positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.3, 1.8), 5);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('another negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('positive and negative numbers with deffrent palces', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('if 0 - 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('when type == "SUBTRACT"', () => {
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('another positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.3, 2.8), 0);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.0, -1.0), 0);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('combine negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('positive and negative numbers with changed places', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('0 - 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('when type == "DIVIDE"', () => {
    it('should do it job', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 4.0), 2.0);
    });

    it('dividing numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('all negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('just equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 5.0), 1);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, -3.0), 1);
    });

    it('rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.6, 4.0), 1);
    });

    it('rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 1.0), 1);
    });

    it('0 divided by positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 3.0), 0);
    });

    it('0 divided by negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -7.0), -0);
    });

    it('positive number divided by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 0), 'Error');
    });

    it('positive number divided by number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('positive number divided by number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('negative number divided by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.0, 0), 'Error');
    });

    it('negative number divided by number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 0.2), 'Error');
    });

    it('negative number divided by number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, -0.4), 'Error');
    });

    it('0 divided by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
