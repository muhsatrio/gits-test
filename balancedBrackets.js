const areBalancedBrackets = (inputedString) => {
    let stack = [];
    let result = true;
    for (let i=0;i<inputedString.length;i++) {
        const char = inputedString.charAt(i);
        if (['(', '{', '['].includes(char)) {
            stack = [...stack, char];
        }
        else {
            if (stack.length===0) {
                result = false;
                break;
            }
            const current_char = stack.pop();
            if (current_char === '(' && char !== ')') {
                result = false;
                break;
            }
            if (current_char === '{' && char !== '}') {
                result = false;
                break;
            }
            if (current_char === '[' && char !== ']') {
                result = false;
                break;
            }
        }
    }
    return (result===true) ? "YES" : "NO";
}

// Choose one of these inputs

const inputedString = "{[()]}";
// const inputedString = "{[(])}";
// const inputedString = "{(([])[])[]}";

console.log(areBalancedBrackets(inputedString));