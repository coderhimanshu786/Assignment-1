//Approch
//We will use 0 as a pivot element and whenever we see a non zero element we will swap it with the pivot element. So all the non zero element will come at the beginning by using splice method which can change the value of existing elements in an array by replacing the elements in it.
//Time Complexity: O(n) where n is the size of elements of the input array.
//Space Complexity: O(1)

let moveZeroes = function(nums) {
    for(let i= nums.length-1; i>=0; i--){
        if(nums[i]===0){
            nums.push(0) 
            nums.splice(i,1)
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));