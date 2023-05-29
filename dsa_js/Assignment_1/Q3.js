//Approch
//Initialize the low(start) pointer to 0, represent the 1st index of an array and high(end) pointer to arr.size()-1, representing the last index of an array then
//To cal. the mid index by using formula
//compare the target with the mid index
// if array element if found to be greater than value, print that index as insert position of value. if no element is found to be exceeding value, value must be inserted after the last array element.

//Time Complexity And Space Complexity
// the binary search algo divides the search space in half at each step O(logn) And use only constant amount of space O(1)

let searchInsert = function(arr, target){
    let low = 0, high = arr.length-1;
    let ans = arr.length;   //default variable use When target is greater than all elements

    while(low <= high) {
        let mid = Math.floor((high + low) / 2);

        if(target == arr[mid]) {
            return mid;
        }else if(target > arr[mid]){
            low = mid + 1;
        }else{
            ans = mid;  //Update an ans in current Index
            high = mid - 1;
        }
    }
    return ans;
}

    console.log(searchInsert([1, 3, 5, 6], 5));
    