function telephoneCheck(str) {
    let phoneregx = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
    if (phoneregx.test(str)) {
        return true;
    }
    // Good luck!
    return false;
}

console.log(telephoneCheck("555-555-5555"));