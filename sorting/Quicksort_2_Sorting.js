function quickSort(arr) {
    // Write your code here
    const p = Number(arr.shift());
    const main = arr.reduce((acc, curr) => {
        if (Number(curr) < p) {
            acc.left.push(curr);
        } else {
            acc.right.push(curr);
        }
        return acc;
    }, {left:[] , right:[]});
    return {
        left: main.left, 
        p, 
        right: main.right
    };
}

function processData(input) {
    //Enter your code here
    const n = Number(input.split('\n')[0]);
    const arr = input.split('\n')[1].split(' ');
    if(n === 0){
        return arr;
    }
    const sortedArr = quickSort(Array.from(arr));
    const left = sortedArr.left.length >= 1 ? processData(sortedArr.left.length+'\n'+sortedArr.left.join(' ')) : null;
    const right = sortedArr.right.length >= 1 ? processData(sortedArr.right.length+'\n'+sortedArr.right.join(' ')) : null;
    let returnArray = [];
    if(left){
        returnArray = [...returnArray, ...left];
    }
    returnArray.push(sortedArr.p);
    if(right){
        returnArray = [...returnArray, ...right];
    }
    if(returnArray.length > 1){
        console.log(returnArray.join(' '));
    }
    return returnArray;
} 

// const input = `7\n5 8 1 3 7 9 2`;
// const input = `400\n193 710 -326 -212 630 434 -378 728 25 702 -324 719 -546 -754 -256 -254 268 -718 -145 -28 12 125 7 -565 54 594 301 -267 776 532 141 -555 -453 663 -556 -607 58 734 584 -632 202 -304 460 -405 17 -97 399 -551 273 400 298 699 -472 275 16 -741 623 -78 768 -421 271 -264 223 -288 239 -502 518 -337 -450 539 327 77 285 73 784 778 -196 -707 -174 654 190 683 375 744 40 749 133 -122 752 404 -34 456 -384 671 -255 -745 496 626 -352 347 -364 -563 515 -321 -382 389 -16 348 -419 -370 645 648 -234 -676 799 138 -739 -592 165 659 13 -475 79 -553 -353 -169 134 513 -641 151 535 325 259 -672 733 -376 603 -580 -714 546 -107 439 -306 462 -432 560 -48 8 -769 -363 -360 -47 -435 -94 480 721 -599 -493 -733 -69 219 674 -751 419 -24 323 -574 50 -679 670 558 310 -26 413 361 -355 694 -348 -70 -215 -204 -708 -478 100 438 368 390 -618 533 262 152 -722 145 -689 -600 762 -422 43 -247 -216 -379 321 526 -396 716 452 790 83 785 493 -765 553 -411 -33 -184 569 743 -703 -383 89 -65 -500 345 -428 -38 46 647 724 -30 364 -239 -68 163 32 740 -316 -644 -698 -305 206 -488 -111 -40 -209 -762 382 295 741 -180 291 365 -654 -731 177 -294 -498 -275 673 747 -685 -506 218 -12 -198 -137 -572 635 -307 281 -5 -311 566 508 381 199 672 -102 617 108 -621 393 94 720 66 -385 -150 144 -388 505 150 342 -627 588 -142 405 472 -486 629 482 712 498 -281 510 286 440 380 605 -242 -577 751 111 -681 476 258 367 -64 -445 -540 -214 409 -162 781 38 -690 353 486 -530 633 339 -323 -717 -328 360 -159 611 478 451 -300 668 -51 461 48 49 658 -544 112 -783 127 -331 -394 146 294 753 -227 436 320 -158 -798 -634 175 -371 -266 408 166 -425 178 -277 -408 507 -31 -315 -289 -244 -119 -521 -318 -343 524 -582 -25 171 764 -128 242 184 -766 -293 -367 -423 -271 -132 512 544 -206 -648 331 -192 -138 665 29`;

let test =processData(input);
console.log(test);