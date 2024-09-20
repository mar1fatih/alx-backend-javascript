const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const Cost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${Cost}`);
};

module.exports = sendPaymentRequestToApi;
