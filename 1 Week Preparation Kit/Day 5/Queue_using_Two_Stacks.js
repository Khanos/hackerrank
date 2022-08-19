function processData(input) {
    //Enter your code here
    const queue = [];
    const inputArr = input.split('\n');
    const n = inputArr.shift();
    inputArr.forEach(el => {
        const value = el.split(' ');
        switch(value[0]){
            case '1':
                queue.push(value[1])
                break;
            case '2':
                queue.shift();
                break;
            case '3':
                console.log(queue[0]);
                break;
        }      
    });
} 
