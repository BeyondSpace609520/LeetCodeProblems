const Morse_Code_Map = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
}

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if(! words)
        return ;
    
    var word, character;
    var morse_array = [], morse_word = '';
    
    for(word of words) {
        morse_word = '';
        
        for(character of word) {
            morse_word += Morse_Code_Map[character];
        }
        if(! morse_array.includes(morse_word))
            morse_array.push(morse_word);
    }
    return morse_array.length;
};

/*
TEST_CASE

["gin", "zen", "gig", "msg"]
2

["agn", "zsn", "fic", "vsz"]
4
*/