const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console);
    }
  });

  afterEach(() => {
    spy.log.resetHistory();
  });

  it('(100, 20) logs The total is: 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith('The total is: 120')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });

  it('(10, 10) logs The total is: 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });
});
