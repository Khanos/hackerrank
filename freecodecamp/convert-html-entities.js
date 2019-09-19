function convertHTML(str) {
    // &colon;&rpar;
    let arr = str.split('');
    let newStr = '';
    arr.map(letter => {
        switch (letter.charCodeAt(0)) {
            case 38:
                newStr+='&amp;';
                break;
            case 60:
                newStr+='&lt;';
                break;
            case 62:
                newStr+='&gt;';
                break;
            case 34:
                newStr+='&quot;';
                break;
            case 39:
                newStr+='&apos;';
                break;
            default:
                newStr+=letter;
                break;
        }
    })
    return newStr;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log('End');