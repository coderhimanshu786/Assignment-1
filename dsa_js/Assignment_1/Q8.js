//Approch
//create variable findErrorNums with adding a function of nums
//1st to find the length of an array then
//using arithmatic formula to calculate the series of an Array it helps to exact average of the series so that if we error/missing a number while coding or in future to easily access that number
//here in below question, 2 is the duplicate number at the index of 2 so that on application of arithamatics series it find the series no and gives output is [2, 3]
//were a is the first term of the Arithmatic series..

var findErrorNums = function (nums) {
  let len = nums.length;
  //     Formula to calculate sum of Airthmetic series
  let sum = (len * (len + 1)) / 2;
  //     Now, just doing the other calculations required
  let s = 0,
    a = 0;
  let obj = {};
  for (let i of nums) {
    if (obj[i]) {
      a = i;
    } else {
      obj[i] = true;
      s += i;
    }
  }
  return [a, sum - s];
};

console.log(findErrorNums([1,2,2,4]));
