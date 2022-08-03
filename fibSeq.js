/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    
    if(n <= 1) {
        return n;
    }
    return fib(n-1) + fib(n-2);
    
};
//  Time complexity: O(2^N) the slowest way to solve the Fibonacci Sequence because it takes exponential time. 
//The amount of operations needed, for each level of recursion, grows exponentially as the depth approaches N.

//Space complexity: O(N)  We need space proportional to N to account for the max size of the stack, in memory. 
//This has the potential to be bad in cases that there isn't enough physical memory to handle the increasingly growing stack, leading to a StackOverflowError
 
/************************************************************************ */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    if(n === 0) return 0; 
    if(n === 1) return 1;
    
    return fib(n-1) + fib(n-2);  
};

/*************************************************************** non-recursive **************************************************************************** */
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    
    let a = 1; let b = 0; let temp;
    
    while (n > 0) {
        temp = a;
        a =  a + b;
        b = temp;
        n--;
    }
    return b;
};

/***********************************!!! Binet’s Formula -> faster than iter. and rec. methods, and doesn't rely on previous Fib. numbers ************************************ */

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {

    return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5));
};

//Time complexity: O(log N).
//Space complexity: O(1)
/*****************************************************************************************************************************************************************************************/


