//20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const match = {
    '(': ')',
    '{': '}',
    '[': ']'
    };
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if((s[i] === '(') || (s[i] === '{') || (s[i] === '[')) {
            stack.push(s[i]);
        }
        if((s[i] === ')') || (s[i] === '}') || (s[i] === ']')) {
           let a = stack.pop();
            if( match[a] !== s[i]) {
                return false;
            }
        }
    }
     return stack.length === 0;

};