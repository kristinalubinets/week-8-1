//13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let num = 0;
    
    const roman = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }
    
    for(let i = 0; i < s.length; i++) {

        if(s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X')) {
                num += roman[s[i+1]] - roman[s[i]];
                i++;
        } else if (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C')) {
                num += roman[s[i+1]] - roman[s[i]];
                i++; 
        } else if (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M')) {
                num += roman[s[i+1]] - roman[s[i]];
                i++; 
        } else
            num += roman[s[i]];
    }
    return num;
};