const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', () => {
  it('should uses the calculateNumber method of Utils', () => {
    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    spy.calculateNumber.restore();
  });
});
