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

let game = createGame(30, 40, ["word 1","word 2","word 3"], options);
```

- createGame(rows, columns, words, options):

  - rows -> number of word search lines
  - columns -> columns of word search lines
  - words -> array of words that will be in the word search
  - options -> json object that contains the game preferences 


<!-- ⛔️ AUTO-GENERATED-CONTENT:START (CONTRIBUTORS) -->
| **Commits** | **Contributor** |  
| --- | --- |  
| 12 | [rogeriomattos](https://github.com/rogeriomattos) | 
| 2 | [TigreDoMexico](https://github.com/TigreDoMexico) | 

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->
