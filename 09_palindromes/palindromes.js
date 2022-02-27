const palindromes = function (text) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    text = text.toLowerCase();
    text = text.split("");
    console.log(text);
    var newText = new Array();
    for (i = 0; i < text.length; i++) {
        if (alphabet.includes(text[i])) {
            newText.push(text[i])
        }
    }
    console.log(newText);
    let newTextCopy = [];
    for (z = 0; z < newText.length; z++) {
        newTextCopy.push(newText[z]);
    }
    newTextReversed = newTextCopy.reverse();
    console.log(newTextReversed)
    newText = newText.join(' ')
    newTextReversed = newTextReversed.join(' ');
    console.log(newText)
    console.log(newTextReversed)
    if (newText === newTextReversed) {
        return true;
    }
    else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
