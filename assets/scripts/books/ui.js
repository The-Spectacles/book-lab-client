'use strict';

const success = (data) => {
  console.log(data);
};

const failure = () => {
  console.log('fail');
};

module.exports = {
  success,
  failure,
};