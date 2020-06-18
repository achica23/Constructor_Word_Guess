function Letter(char) {
    this.char = char;
    this.guessedWord = false


    this.blankPlaceholder = function () {
        if (this.guessedWord) {
            return this.char
        } else {
            return "_"    // return string
        }

    }
    this.checkGuess = function (userGuess) {
        if (userGuess === this.char) {
            this.guessedWord = true
        }
    }
}


module.exports = Letter; 