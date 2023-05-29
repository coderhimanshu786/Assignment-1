//Approch 
//Brute Force method
//create a variable n make funtion of nums and target then 
//then find length of given array iterate over an array
//then sum of two numbers if they found equal to the target print that number(indices)
//loop through each element in the array and check if there exists another element in the array such that their sum equals the target value. If such elements exist, we can return their indices as the answer

//complexities
//Time complexity: O(n^2)
//Space complexity: O(1)


let twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));