//To Remove all occurrences of val in number in-place...
//numbers is passed in by reference .. i.e without making a copy
//Any modification to numbers in function would be known by the caller.

//Approach
//1- Take a variable removeElement this will find the number of elements except value
//2- If the current element is not available then returned array with removed element.

//Time Complexity And Space Complexity
// there is a single scan of an array so that the Time compexity is O(n) And we are not using any extra space so that the space complexity is O(1)

let removeElement = function(nums, val){
    //Method indexOf(val) returns the first index of given element of the array 
    while(nums.indexOf(val) !== -1){        //(-1)=if value is not present then

        //splice works to modify the original array by removing, replacing, and adding element
        nums.splice(nums.indexOf(val), 1)       //returns array with removed element
    
    }
    return nums.length;
};


console.log(`The value of K =`,removeElement([3, 2, 2, 3], 3));