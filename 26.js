//26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
// integer array nums in non-decr order
// remove dublicates in place
// keep the same order of elements, and length
// place result in the first part of array nums
// modefy aray in place! no extra memory 

var removeDuplicates = function(nums) {

    for(let i = 0; i < nums.length; i++) {

        if(nums[i] === nums[1+i]) {
            nums.splice(i, 1);
            i--;
        }
        //console.log('nums=' + nums)
    }       
    return nums.length;
};
// Time complexity O(n^2) bc of for loop and splice() inside of it, but O(1) space complexity

/****************************************** faster solution in O(n) with a constant time complexity ****************************/

var removeDuplicates = function(nums) {
    
    if (nums.length == 0) return 0;    
    let i = 0;
    
    for(let j = 1; j < nums.length; j++) {
        if(nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
        console.log(nums)
    }
    return i + 1;    
};

/******************* or *******************************/

var removeDuplicates = function(nums) {
    
    if (nums.length == 0) return 0;    
    let i = 1;
    
    for(let j = 1; j < nums.length; j++) {
        if(nums[j] !== nums[j-1]) {
            nums[i] = nums[j];
            i++;
        }
        console.log(nums)
    }
    return i + 1;    
};