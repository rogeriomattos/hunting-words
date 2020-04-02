# hunting-words

Package of functions that help to create hunting word game.

How to use?
```shell
npm i hunting-words
```

```js
const { create } = require('hunting-words');

let huntingWords = create(["word 1","word 2","word 3"]);
```

- create(words, row, column): 

This function receives a vector of words and returns a matrix of letters with the scrambled words, this matrix is the word search.
It also receives a parameter called row that tells how many lines the word puzzle will have and another parameter called column that tells how many columns the word puzzle will have. If these 2 properties are not informed, the function takes the longest word and creates a matrix based on its size plus 10. 

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (CONTRIBUTORS) -->
| **Commits** | **Contributor** |  
| --- | --- |  
| 12 | [rogeriomattos](https://github.com/rogeriomattos) | 
| 2 | [TigreDoMexico](https://github.com/TigreDoMexico) | 

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->
