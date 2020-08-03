function authEvents(events) {
    // Write your code here
    let getAscii = (letter) => {
        return letter.charCodeAt(0);
    }
    let hashing = (pass) => {
        let result = 0;
        let count = pass.length;
        for(let letter of pass){
            if(count === 0){
                result += getAscii(letter)%((10**9)+7);
            } else {
                result += getAscii(letter)*(131**count);
            }
            count--;
        }
        return result;
    }
    let currentHash;
    for(const item of events){
        if(item[0] === 'setPassword'){
            currentHash = hashing(item[1]);
        } else if(item[0] === 'authorize'){
            currentHash
        }
    }
}
let events = [
    [
        ['setPassword', '000A'],
        ['authorize', '108738450'],
        ['authorize', '108738449'],
        ['authorize', '244736787']
    ]
];

authEvents(events);