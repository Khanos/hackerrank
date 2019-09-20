function convertToRoman(num) {
    // Lets get some roman numbers
    let result = new Array();
    let romanNumbers = new Map();
    romanNumbers.set("1", 'I');
    romanNumbers.set("5", 'V');
    romanNumbers.set("10", 'X');
    romanNumbers.set("50", 'L');
    romanNumbers.set("100", 'C');
    romanNumbers.set("500", 'D');
    romanNumbers.set("1000", 'M');
    romanNumbers.set("5000", 'V');

    // Lets decompose the number into decimal parts
    let numArr = num.toString().split('');
    let ceros = numArr.length-1;
    numArr.forEach(element => {
        if(ceros > 0){
            result.push(element+new Array(ceros).fill(0).join(''));
        } else {
            result.push(element);
        }
        ceros--;
    });
    let romanNum = new String();
    result.forEach(element => {
        let ceros = element.length-1 >= 1 ? new Array(element.length-1).fill(0).join('') : '';
        if(parseInt(element) < parseInt("5"+ceros)){
            if(parseInt(element) === parseInt("4"+ceros)){
                romanNum = romanNum.concat(romanNumbers.get("1"+ceros)+romanNumbers.get("5"+ceros));
            } else {
                for (let i = 0; i < parseInt(element.substring(0,1)); i++) {
                    romanNum = romanNum.concat(romanNumbers.get("1"+ceros));
                }
            }
        } else {
            if(parseInt(element) === parseInt("9"+ceros)){
                romanNum = romanNum.concat(romanNumbers.get("1"+ceros)+romanNumbers.get("1"+ceros+"0"));
            } else {
                romanNum = romanNum.concat(romanNumbers.get("5"+ceros));
                for (let i = 0; i < (parseInt(element.substring(0,1)+ceros)-parseInt("5"+ceros))/parseInt("1"+ceros); i++) {
                    romanNum = romanNum.concat(romanNumbers.get("1"+ceros));
                }
            }
        }
    })
    return romanNum;
}

//console.log(convertToRoman(46))
console.log(convertToRoman(3999))