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

