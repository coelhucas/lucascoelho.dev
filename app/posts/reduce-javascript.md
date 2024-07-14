---
title: Reduce — JavaScript
date: "2021-10-16"
---

Eu demorei bastante a entender como o reduce funciona, mais do que eu “me orgulho”. Mas tá tudo bem. Não é algo que você necessariamente precisa usar todos os dias. Embora algo aqui e acolá poderia ser simplificado com um uso do reduce, nos momentos em que nós não sabíamos disso provavelmente nos viramos de outra forma.

@[](https://miro.medium.com/max/1400/1*x_MQsBFxPHbWF0nE5xNr1A.jpeg)

<center>

<sub>Foto por [Brenda Godinez](https://unsplash.com/@cravethebenefits) no [Unsplash](https://unsplash.com/s/photos/fruit-salad)</sub>

</center>
<br/>

Dependendo da sua bolha e redes sociais, provavelmente você já viu aquele clássico exemplo mostrando diversos emojis de fruta em um array e como o reduce de fato “reduz” o array a uma salada de frutas. É um exemplo bonitinho de ser ilustrado, mas não dá nenhuma ajuda real.

De forma curta, isso é uma implementação do reduce:

```js
const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((acc, current) => acc + current);
```

exemplo simples de reducer que soma os valores de um array

E pode ser outro exemplo dos que encontramos facilmente em todo lugar. De todo modo, vamos incrementando aos poucos!

O reduce, tal qual [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) e outros, realizam uma iteração em um Array, com a diferença de que o reduce espera que a partir do seu array você gere um único valor.

No trecho de código acima, o que chamamos de _acc_ ou accumulator (acumulador) é o valor anterior da iteração, que vai começar como o valor inicial do seu array[^1] (nesse exemplo, o 1). Enquanto isso, _current_ é o valor atual da iteração, que nesse início vai ser o segundo elemento (o 2)[^2].

Podemos pensar então na execução desses passos da seguinte forma:

```js
// 1 (valor inicial), 2 (valor atual) -> 1 + 2
// 3 (valor anterior), 3 (valor atual) -> 3 + 3
// 6 (valor anterior), 4 (valor atual) -> 6 + 4
// 10 (valor anterior), 5 (valor atual) -> 10 + 5
// 15 (valor anterior), 6 (valor atual) -> 15 + 6

console.log(sum); // 21
```

<sub>exemplo do que está acontecendo no código</sub>

[^1]: Caso você passe um valor inicial no seu reducer, esse comportamento é diferente, isso será mostrado mais abaixo.
[^2]: O seu array pode ter apenas um elemento, mas nesse caso, indiferentemente do retorno do seu reducer (a função que passamos dentro do reduce), o valor vai ser o único contido dentro do array original. Dado o seguinte trecho de código:

```js
const arr = [1];
cont result = arr.reduce((acc, current) => 2 * (acc + current));
```

<sub>exemplo simples de reducer que irá retornar o único valor do array</sub>

Mesmo que o retorno seja duas vezes a soma do acumulador e o valor atual, o retorno será 1. Isso porque ele nem estará sendo performado.

O [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) também aceita como segundo parâmetro um valor inicial. Nesse caso, invés do primeiro elemento ele irá começar desse seu valor inicial:

```js
const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((acc, current) => acc + current, 10);

console.log(sum); // 31
```

Caso você quisesse obter o mesmo resultado acima sem usar um reduce por exemplo, você teria algo assim:

```js
const arr = [1, 2, 3, 4, 5, 6];

let sum = 10;
arr.forEach((value) => {
  sum += value;
});

console.log(sum); // -> 31
```

<sub>exemplo paralelo, usando forEach</sub>

## Reducer callback

Eu mencionei um pouco acima sobre a função ‘reducer’, que é a que você passa ao chamar [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), mas ela vai além dos exemplos usados. Essa callback pode receber 4 parâmetros:

- (1) Valor anterior, (2) valor atual, (3) índice atual e (4) array.

Os dois primeiros já foram explicados. Os dois últimos são ainda mais simples: o _índice atual_ se refere (claro) ao índice do _valor atual,_ isso significa que ele irá sempre começar em 1, que é o _segundo elemento_[^3] do seu array. Já o array, é simplesmente o array que “está sendo reduzido”. No exemplo inicial: [1, 2, 3, 4, 5, 6].

[^3]: Caso você não tenha passado um segundo parâmetro definindo o valor inicial.

## Mas qual a relevância desses outros parâmetros?

Vamos supôr que você tenha um reducer complexo. Por organização, é bom mantê-lo separado para facilitar a manutenção. Neste caso, você precisa de uma forma de acessar o array recebido:

```js
const reducer = (accumulator, current, currentIndex, array) => {
  const prefix = currentIndex === array.length - 1 ? 'e ' : ', ';
  return `${accumulator}${prefix}${current}`;
}

function getJoinedNames(names) {
  return names.reduce(reducer);
}

console.log(getJoinedNames(['zezinho', 'luizinho', 'iguinho')]); // 'zezinho, luizinho e iguinho'
```

<sub>exemplo simples de reducer que une um array de strings</sub>

Este exemplo é puramente didático, não deve ser tratado como a melhor forma de resolver esse tipo de problema.

Mas antes: o que esse trecho nos resolve?

- Preciso que dado um input como [‘nome1’, ‘nome2’, ‘nome3’], eu consiga uma string como “nome 1, nome2 e nome3”.

Durante a iteração, foram usados os parâmetros currentIndex e array para descobrir se o elemento atual é o último, para assim definir se o prefixo será uma separação por vírgula ou por ‘e ‘. É importante que nós tenhamos acesso a essas informações mesmo em exemplos como esse, onde o reducer está fora do escopo da função e não sabe o que é o array original. É claro que nesse caso seria mais simples só manter o reducer no escopo da função, mas como mencionei, esse exemplo foi feito para fins didáticos.

## Caso de uso real

Recentemente, fiz a adição de uma funcionalidade que permite a criação de temas customizados para o nosso Design System no Gympass, o [Yoga](https://github.com/gympass/yoga). Dentre as adições, houveram mudanças em código existente e [uma das sugestões no review do meu pull request](https://github.com/Gympass/yoga/pull/344#discussion_r715692311) era a reescrita de um forEach para usar um reducer. Se você quiser ver o código, é só vir aqui: [diff](https://github.com/Gympass/yoga/pull/344/files#diff-d3a48eaff212c882790981d6bd71346ba9117a400a89f4ed625c4c4fad2a59e4R7-R22).

Pra evitar trazer toda a complexidade e contexto envolvidos, vou fazer um exemplo diferente aqui:

```js
const components = [
  {
    name: "Button",
    styles: {
      color: "white",
      backgroundColor: "black",
      borderRadius: "20px",
    },
  },
  {
    name: "TextInput",
    styles: {
      color: "black",
      border: "2px solid",
    },
  },
  {
    name: "Checkbox",
    styles: {
      color: "deeppink",
    },
  },
];

const getComponentsMetadata = () =>
  components.reduce(
    (acc, current) => ({
      ...acc,
      [current.name]: {
        ...current.styles,
      },
    }),
    {},
  );
```

<sub>exemplo mínimo de como usamos o reduce em um projeto real</sub>

**Resumindo:** dado o array que temos no código, o retorno vai ser um objeto nesse formato:

```js
{
  Button: {
    color: "white",
    borderRadius: "20px",
    backgroundColor: "black"
  },
  TextInput: { … },
  CheckBox: { … }
}
```

<sub>(resumido com { … }, a ideia é a mesma)</sub>

Antes isso era feito com um forEach, que tal como o reduce itera um array, mas não é feito para manipulações exatamente. O código original, que criava um objeto vazio que sofria mutações durante a iteração como:

`components[field] = { ...components[index].styles }`

Já com o reduce, temos apenas um novo objeto criado a partir de um array que não realizou mutações a nenhuma variável.

Há “controvérsias” e nem todo mundo acha que usar o reduce é um ganho. Mas ao menos, agora você tem essa ferramenta no seu canivete suíco.
