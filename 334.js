//344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let temp;
    
    for(let i = 0; i < s.length/2; i++) {
        temp = s[i];
        s[i] = s[s.length-i-1];
        s[s.length-i-1] = temp;    
    }
};

// or just :
var reverseString = function(s) {
    return s.reverse();
}