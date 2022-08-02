/******************************************  34. Find First and Last Position of Element in Sorted Array  *******************************************/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {

    if(!nums.length) return [-1,-1];
       
    function findLeftMostIndex() { 
          let left = 0;
          let right = nums.length - 1;
          let leftMostIndex = -1;
           
          while(left <= right) { 
              
             let middle = Math.floor((left + right) / 2);        
              
              if (nums[middle] > target) {
                  right = middle - 1;
              } else if (nums[middle] < target) {
                  left = middle + 1;
              } else {
                  leftMostIndex = middle;
                  right = middle - 1;
              }
          }
           return leftMostIndex;
       }
      
        function findRightMostIndex() { 
          let left = 0;
          let right = nums.length - 1;
          let rightMostIndex = -1;
           
          while(left <= right) { 
              
             let middle = Math.floor((left + right) / 2);        
              
              if (nums[middle] > target) {
                  right = middle - 1;
              } else if (nums[middle] < target) {
                  left = middle + 1;
              } else {
                  rightMostIndex = middle;
                  left = middle + 1;
              }
          }
           return rightMostIndex;
       }
      const left = findLeftMostIndex();
      const right = findRightMostIndex();
      
      if (left === -1) return [-1, -1];
      
      return [left, right];
  };