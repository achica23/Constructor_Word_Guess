var Letter = require("./letter.js")

function Word(currentWord) {
    this.currentWord = currentWord
    this.newLetter = currentWord.split('').map(function (val) {
        return new Letter(val)      //returning array of objects  val is coming from .map 
    })
    this.displayWord = function () {
        this.thisWord = []
        for (let i = 0; i < newLetter.length; i++) {
            const character = currentWord[i];
            let newLetter = new Letter(character);
            this.currentWord.push(newLetter);
        }
        console.log(this.currentWord)

        this.displayWord = function () {
            this.thisWord = []

            for (let i = 0; i < this.thisWord.length; i++) {
                if (this.thisWord[i] !== " ") {
                    let letterStr = this.thisWord[i].guessed();
                    Word.push(letterStr);
                }
                else {
                    Word.push(" ");
                }

                console.log(word.join(" "))
            }
        }
    }
}


module.exports = Word