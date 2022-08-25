/** Return YES or NO if is a vaild bracket expression */
function isBalanced(s) {
    // Write your code here
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        if(openBrackets.includes(char)){
            stack.push(char);
        } else if(closeBrackets.includes(char)){
            const lastBracket = stack.pop();
            if(bracketMap[lastBracket] !== char){
                return 'NO';
            }
        }
    }
    return stack.length === 0 ? 'YES' : 'NO';
}

const s = '{[()]}';
console.log(isBalanced(s));