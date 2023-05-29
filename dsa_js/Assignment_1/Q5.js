//Approch
//create a funtion and initialize value of i, j, k then 
//Traverse through arr3 and append its element to end of arr1 starting from index n1
//Traverse through arr3 and append its element to end of arr2 starting from index n2
//Sort the entire arr3 array using sort() function

//time complexity and space complexity
//O((m+n)log(m+n)) and O(1)


function mergeArrays(arr1, arr2, n1, n2, arr3) {
    let i = 0, j = 0, k = 0;
     
    // traverse the arr1 and insert its element in arr3
    while (i < n1) {
        arr3[k++] = arr1[i++];
    }

    // now traverse arr2 and insert in arr3
    while (j < n2) {
        arr3[k++] = arr2[j++];
    }

    // sort the whole array arr3
    arr3.sort();
}
let arr1 = [1, 3, 5, 7];
let n1 = arr1.length;
let arr2 = [2, 4, 6, 8];
let n2 = arr2.length;
let arr3 = new Array(n1 + n2);
mergeArrays(arr1, arr2, n1, n2, arr3);

console.log("Array after merging");
for (let i = 0; i < n1 + n2; i++)
    process.stdout.write(arr3[i] + " ");

