# hunting-words

Package of functions that help to create hunting word game.

How to use?
```shell
npm i hunting-words
```

```js
const { createGame } = require('hunting-words');

const options = {
    wordsCross:false, 
    inverseWord:true, 
    wordInVertical:true,
    wordInHorizontal:true, 
    wordDiagonalLeft: false, 
    wordDiagonalRight: false
};

let game = createGame(10, 10, ["word1","word2","word3"], options);
```


- createGame(rows, columns, words, options):
  Return   
  - rows -> number of word search lines
  - columns -> columns of word search lines
  - words -> array of words that will be in the word search
  - options -> json object that contains the game preferences 


Return 
```json
{
  board: array<array<createLetter>> 
  words: array<string> ["word1", "word2", "word3"],
  rows: 10,
  columns: 10,
}
```
createLetter
```json
{
  letter: "C"
  word: []
  row: 0
  column: 0
  isSelected: false
  addNewWord: ƒ (word)
  setLetter: ƒ (letter)
  setRow: ƒ (row)
  setColumn: ƒ (column)
  setIsSelected: ƒ (isSelected)
}
```


<!-- ⛔️ AUTO-GENERATED-CONTENT:START (CONTRIBUTORS) -->
| **Contributor** |  
| --- |  
| [rogeriomattos](https://github.com/rogeriomattos) | 
| [TigreDoMexico](https://github.com/TigreDoMexico) | 

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->
