const _ = require("lodash")

const numbers = [1, [2, [3, [4]]]]
const newNums = _.flattenDeep(numbers)
console.log(newNums);