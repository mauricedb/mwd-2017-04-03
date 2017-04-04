var camelCase = require('lodash/camelCase');

module.exports = {
  print(msg) {
    console.log(msg);
  },
  camelCase(str) {
    return camelCase(str);
  },
};
