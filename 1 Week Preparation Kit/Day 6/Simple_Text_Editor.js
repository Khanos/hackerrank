function processData(input) {
    //Enter your code here
    const inputsArr = input.split('\n');
    inputsArr.shift();
    let S = '';
    let textEditor = [S];
    inputsArr.forEach(input => {
        const [type, k] = input.split(' ');
        switch(type){
            case '1':
                S += k;
                textEditor.push(S);
                break;
            case '2':
                S = S.slice(0, -k);
                textEditor.push(S);
                break;
            case '3':
                console.log(S[+k-1]);
                break;
            case '4':
                textEditor.pop();
                S = textEditor[textEditor.length - 1];
                break;
        }
    });
    return S;
} 

const input = `8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`;
console.log(processData(input));