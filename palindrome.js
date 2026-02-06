const msg = prompt("GIVE ME A WORD!");
evaluatePalindrome(msg)

function evaluatePalindrome(theGivenWord) {
    let realWord = theGivenWord.replace(" ", "").toLowerCase();
    let reversedWord = "";
    for (const character of realWord) {
        reversedWord = character + reversedWord;
    }

    if (realWord === reversedWord) {
        return true;
    } else {
        return false;
    }
}