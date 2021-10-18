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

// console.log(twoSum1([2,7,11,15],9));
// console.log(twoSum1([3,2,4],6));
// console.log(twoSum1([3,3],6));


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

function removeDuplicates(array) {
    let count = 0;
    array.sort((a,b) => a-b);
    for(let i = 0; i < array.length; i++){
        for(let j= i+1; j<array.length; j++){
            if (array[i] == array[j]) {
                array.splice(j,1);
                count ++;
                j--
            }
        }
    }
    for(let j = 0; j<count; j++){
        array.push("_");
    }
    console.log(`Count = ${count}`);
    return array;
}


console.log(removeDuplicates([1,1,2]));

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));