function reversString(word){
    const word_arry = word.split('')
    let r = word_arry.length-1;
    let l =0;
    while(l < r){
        let temp = word_arry[l]
        word_arry[l] = word_arry[r]
        word_arry[r] = temp
        l++;
        r--;
    }
    return word_arry.join('')
}
console.log(reversString("hello"))