import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js'


describe('calculateNumber', () => {
  describe('when type == "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 3.0, 2.0)).to.equal(5);
    });

    it('equal another positive numbers', () => {
      expect(calculateNumber('SUM', 2.3, 2.8)).to.equal(5);
    });

    it('negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('another negative numbers', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -3.0, 3.0)).to.equal(0);
    });

    it('positive and negative numbers with deffrent palces', () => {
      expect(calculateNumber('SUM', 3.0, -3.0)).to.equal(0);
    });

    it('if 0 - 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('when type == "SUBTRACT"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 4.0, 4.0)).to.equal(0);
    });

    it('another positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.3, 2.8)).to.equal(0);
    });

    it('negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -3.3, -2.8)).to.equal(0);
    });

    it('combine negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('positive and negative numbers with changed places', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('0 - 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('when type == "DIVIDE"', () => {
    it('should do it job', () => {
      expect(calculateNumber('DIVIDE', 6.0, 2.0)).to.equal(3.0);
    });

    it('dividing numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('all negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('just equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 4.0, 4.0)).to.equal(1);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -4.0, -4.0)).to.equal(1);
    });

    it('rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 3.6, 4.0)).to.equal(1);
    });

    it('rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 3.4, 3.0)).to.equal(1);
    });

    it('0 divided by positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 7.0)).to.equal(0);
    });

    it('0 divided by negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('positive number divided by 0', () => {
      expect(calculateNumber('DIVIDE', 7.0, 0)).to.equal('Error');
    });

    it('positive number divided by number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 3432.0, 0.2)).to.equal('Error');
    });

    it('positive number divided by number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 23.0, -0.2)).to.equal('Error');
    });

    it('negative number divided by 0', () => {
      expect(calculateNumber('DIVIDE', -555.0, 0)).to.equal('Error');
    });

    it('negative number divided by number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -522.0, 0.2)).to.equal('Error');
    });

    it('negative number divided by number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -2333.0, -0.2)).to.equal('Error');
    });

    it('0 divided by 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
