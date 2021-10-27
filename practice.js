// Problem 1
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum(arr, target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i,j];
            }
        }
    }
}

function twoSum1(arr, target){
    let obj = {};
    for(let j=0; j<arr.length; j++){
        obj[arr[j]] = j;
    }
    for(let i=0; i < arr.length; i++){
        let diff = target - arr[i];
        if(diff in obj && obj[diff]!=i) {
            return [i, obj[diff]];
        }
    }
}

// console.log(twoSum1([2,7,11,15],26));
// console.log(twoSum1([3,2,4],6));
// console.log(twoSum1([3,3],6));

// Problem 2
/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

function removeDuplicate(array) {
    for(let i=0; i<array.length; i++) {
        if(array[i] === array[i+1]) {
            array.splice(i,1);
            i--;
        }
    }
    return array.length;
}

// console.log(removeDuplicate([0,0,0,0]));


// function removeDuplicate(array) {
//     let result = [];
//     let obj = array.reduce((acc, curr) => {
//         if(acc[curr]){
//             acc[curr] = ++acc[curr];
//         } else{
//             acc[curr] = 1;
//         }
//         return acc;
//     },{});
//     for(let key in obj) {
//         result.push(Number(key));
//     }
//     let number = array.length-result.length;
//     for(let i=0; i<number; i++) {
//         result.push("_");
//     }
//     return result;
// }

function removeDuplicate(array) {
    let uniqueArrayValues = {};
    for(let i=0; i<array.length; i++) {
        uniqueArrayValues[array[i]] = "";
    }
    return Object.keys(uniqueArrayValues).length;
}

// console.log(removeDuplicate([0,0,1,1,1,2,2,2,2,5,5,5]));

// function removeDuplicate(nums) {
//     // let i=0;
//     for (let j=0; j<nums.length; j++) {
//         if (nums[j] === nums[j+1] && nums[j]!=="_") {
//             nums.splice(j,1);
//             nums.push("_");
//             j--;
//         }
//         // else {
//         //     i=j;
//         // } 
//     }
//     return nums;
// };
// console.log(removeDuplicate([0,0,0,0,1,1,1,2]));



// Problem 3
/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

function removeElement(array,value){
    for(let i=0; i<array.length; i++) {
        if(array[i] == value){
            array.splice(i,1);
            i--;
        }
    }
    return array.length;
}

// console.log(removeElement([0,0,1,1,2],1));

// Problem 4
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0
*/

function insertPosition (array,target) {
    for(let i=0; i<array.length; i++){
        if(array[i] == target || array[i]>target){
            return i;
        }
    }
    return array.length;
}

// console.log(insertPosition([0,1,44],46));

// Problem5
/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
*/

function maximumSubArray(array) {
    // let elements = 0;
    // let subArray = [];
    // let result = array.reduce(function (acc, curr) {
    //     return acc + curr;
    // })
    // return result;
    if(array.length == 1){
        return array[0];
    }
    if(array.length <= 10**5){
        let previousSum = -Infinity;
        for(let i=0; i<array.length; i++){
            let totalSum = 0;
            for(let j=i; j<array.length; j++){
                if(array[j]>=-(10**4) && array[j]<=10**4){
                    totalSum += array[j]
                    if(previousSum < totalSum){
                        previousSum = totalSum;
                    }
                }
                
            }
        }
        return previousSum;
    }
}

// console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]),6);
// console.log(maximumSubArray([5,4,-1,7,8]),23);
// console.log(maximumSubArray([1]),1);


// Problem 6
/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [0]
Output: [1]
Explanation: The array represents the integer 0.
Incrementing by one gives 0 + 1 = 1.
Thus, the result should be [1].
Example 4:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

*/

function plusOne(array) {
    let newArr = [];
        if(array[array.length-1] == 9 && array.length>1) {
            let length = array.length;
            while(array[length-1]==9) {
                    newArr.push(array[length-1]);
                    array.splice(length-1,1)
                    length--
                    if(array.length == 0) {
                        array.push(0);
                    }
            }
            let lastDigit = array[array.length-1]
            array.splice(array.length-1,1);
            let str = String(newArr);
            newArr.splice(0,newArr.length);
            str = str.replaceAll(",","");
            str = String(str);
            strFirstDigit = str[0];
            strRest = str.slice(1,str.length);
            lastDigit = BigInt(lastDigit+str);
            lastDigit++;
            lastDigit = String(lastDigit);
            for(let i=0; i<lastDigit.length; i++){
                newArr.push(Number(lastDigit[i]));
            }
            return [...array,...newArr];
        } else {
            lastElement = array[array.length-1];
            lastElement++;
            array.splice(array.length-1,1);
            if(lastElement>9) {
                let str = String(lastElement);
                for(let i=0; i<str.length; i++){
                    array.push(Number(str[i]));
                } 
            } else {
                array.push(lastElement)
            }
            return array;
        }
}

// console.log(plusOne([1,2,3]));


// Problem 7
/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

// function mergeNums(array1, m, array2, n) {
//     let arrayOneResult = [];
//     let arrayTwoResult = [];
//     for(let i=0; i<m; i++) {
//         arrayOneResult.push(array1[i]);
//     }
//     for(let i=0; i<n; i++) {
//         arrayTwoResult.push(array2[i]);

//     }
//     return [...arrayOneResult,...arrayTwoResult].sort((a,b)=> a-b);
// }

// console.log(mergeNums([1,2,3,0,0,0],3,[2,5,6],3));
// console.log(mergeNums([1],1,[],0));
// console.log(mergeNums([0],0,[1],1));

function mergeNums(array1, m, array2, n) {
    array1.splice(m,array1.length);
    for(let i=0; i<n; i++) {
        array1.push(array2[i]);
    }
    array1.sort((a,b) => a-b);
    return array1;
}

// console.log(mergeNums([1,2,3,0,0,0],3,[2,5,6],3));
// console.log(mergeNums([1],1,[],0));
// console.log(mergeNums([0],0,[1],1));

// Problem 9
/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

function pascalsTriangle(rowIndex) {
    let result = [];
    for(let i=0; i<rowIndex; i++) {
        let subArr = []
        for(let j=0; j<=i; j++){
            if(j==0 || j==i) {
                subArr.push(1);
            } else if(j>0 && j<i){
                subArr.push(result[i-1][j-1]+result[i-1][j]);
            } else{
                subArr.push(1);
            }
        }
        result.push(subArr);
    }
    return result;
}

// console.log(getRow(5));
console.log(pascalsTriangle(5));



// Problem 10
/*

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
*/

function pascalsTriangleII(rowIndex) {
    let result = [];
    for(let i=0; i<=rowIndex; i++) {
        let subArr = [];
        for(let j=0; j<=i; j++) {
            if(j==0 || j==i){
                subArr.push(1)
            } else if(j>0 && j<i) {
                subArr.push(result[i-1][j-1]+result[i-1][j]);
            } else {
                subArr.push(1)
            }
        }
        result.push(subArr);
    }
    return result[rowIndex];
}

console.log(pascalsTriangleII(4));
console.log(pascalsTriangleII(3));
console.log(pascalsTriangleII(2));
console.log(pascalsTriangleII(1));
console.log(pascalsTriangleII(0));