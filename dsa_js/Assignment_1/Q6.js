//Approch
//create a variable and add function of nums
//then using a set Object are the collection of values it may occurs value once thats why using set to find the duplicate number in an array. 


// Time complexity: O(n)
// Space complexity: O(n)
let containsDuplicate = function(nums) {
    const findDuplicate = new Set(nums); 
    return findDuplicate.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));