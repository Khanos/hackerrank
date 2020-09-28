function designerPdfViewer(h, word) {
    let numLetters = word.length;
    let abc = 'abcdefghijklmnopqrstuwvxyz';
    let wordArr = word.split('');
    let tallest = wordArr.reduce((prev, curr, index, arr) => {
        return h[abc.indexOf(prev)] > h[abc.indexOf(curr)] ? prev : curr
    });
    tallest = h[abc.indexOf(tallest)];
    return numLetters * 1 * tallest;
}
let arr = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let word = 'abc';
console.log(designerPdfViewer(arr, word));