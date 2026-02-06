const msg = prompt("GIVE ME A WORD!");
evaluatePalindrome(msg)

function evaluatePalindrome(theGivenWord) {
    let realWord = theGivenWord.replace(" ", "");
    let reversedWord = "";
    for (const character of realWord) {
        reversedWord = character + reversedWord;
    }
    console.log(realWord, reversedWord);

    if (realWord === reversedWord) {
        return true;
    } else {
        return false;
    }
}