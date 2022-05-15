String.prototype.rjust = function(width, character) {
    string = this.toString();
    if (character.length != 1) {
        throw new Error("Fill character length must be equal to 1");
    }
    if (string.length >= width) {
        return this;
    }
    return character.repeat(width - string.length) + this;
} 
