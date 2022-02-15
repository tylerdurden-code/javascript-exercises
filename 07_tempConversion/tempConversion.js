const ftoc = function(num) {
  let result = (num - 32) * (5 / 9)
  resultv2 = result.toFixed(1);
  return parseFloat(resultv2);

};

const ctof = function(num) {
  let result = num * (9 / 5) + 32;
  resultv2 = result.toFixed(1);
  return parseFloat(resultv2);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
