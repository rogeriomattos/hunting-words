# hunting-words

Pacote de funções que ajundam a criar caça-palavras.

Como Usar?
```shell
npm i hunting-words
```

```js
const { create } = require('hunting-words');
```

- create(words, row, column): 

Essa função recebe um vetor de palavras e retorna uma matriz de letras com as palavras embaralhadas, essa matriz é o caça palavras.
Ela tambem recebe uma parametro chamado row que diz quantas linhas vai ter o caça-palavras e outro parametro chamdo column que diz quantas columnas vai ter o caça-palavras. Caso essas 2 propriedades não forem informadas a função toma a maior palavra e cria uma matrix com base no seu tamanho mais 10. 