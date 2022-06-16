---
title: Por que copiar código nas suas primeiras tarefas vai te sabotar?
date: "2022-06-16"
---

Quando chegamos em um trabalho novo, normalmente temos um cuidado especial com nossas primeiras entregas e uma das práticas comuns é de se basear em código já existente, copiando ele como base.

Afinal, quem quer chegar fazendo tudo completamente diferente dos padrões que já estavam lá, né?
Pode parecer contra intuitivo dizer que isso é algo ruim na hora de se familiarizar com uma base de código, mas vamos destrinchar um pouco os porquês, usando como exemplo o lar das maiores aberrações do front-end... Testes unitários!

Esse é um lugar comum de se ver essa prática, já que uma minoria das pessoas que programam tem experiência relevante prévia com testes.[^1]

![](https://www.designer-daily.com/wp-content/uploads/2017/10/SZPjHwz.jpg)
<center><sub><a class="anchor" href="https://www.designer-daily.com/a-collection-of-fake-programming-covers-61303">Fonte</a></sub></center>
<br />

## Você não sabe os porquês
Quando você copia uma spec, por exemplo, substitui o componente renderizado pelo seu e faz algumas pequenas mudanças para que o teste passe, você não tem contexto nenhum do que tá acontecendo ali.

Um exemplo: certa vez eu fiz a adição da regra [`no-unused-expressions`](https://eslint.org/docs/rules/no-unused-expressions) em nosso projeto. Dentre vários códigos já existentes onde foi necessário corrigir o novo erro do lint, encontrei o seguinte trecho:
```js
beforeEach(() => {
  jest.clearAllMocks;
});
```
Você consegue perceber o que tem de errado aí? Bom, se você não tem essa validação automática em seu projeto, é muito provável que você acabe deixando esse trecho passar no meio de outras 200 linhas de teste dentro de um diff.

O erro aí é simples: a linha `jest.clearAllMocks;` não faz nada, é apenas uma expressão solta por si só. Para ela fazer algo, teríamos que invocar o método [`clearAllMocks`](https://jestjs.io/docs/jest-object#jestclearallmocks) do jest:

```diff
-- jest.clearAllMocks;
++ jest.clearAllMocks();
```

Isso já entrega outra questão: se os testes passavam sem a correção, nós nem precisamos do `clearAllMocks` nesse arquivo! Ele é redundante.

Esse trecho era replicado em diversos arquivos de testes diferentes de contexto relacionado, o que é um indício bem forte de que tenham sido resultados de uma primeira implementação do tipo seguida de diversas cópias.

> Ok, mas isso daí é facilmente resolvido com uma configuração decente de linter, dava pra prevenir isso desde antes.

Vamos então para outro exemplo: escrevendo um teste, fui olhar como o mock para uma biblioteca estava sendo feito e, notei que na linha onde é feito a chamada ao `requireActual`, havia um ```@ts-ignore```, que ignora um erro do TSC na linha seguinte.

Achei estranho, porque na minha implementação havia o mesmo mock e eu não recebi nenhum erro do TSC. Decidi então tirar o comentário e, pra minha surpresa, não tinha erro nenhum ali a ser ignorado. Mais uma vez, dezenas de arquivos tinham o mesmo mock copiado e colado, todos com a mesma linha que não deveria nem existir. Esse tipo de coisa não é pego através de uma regra no linter. A menos que a gente bloqueie completamente o uso de `@ts-ignore`!

### Falta de senso crítico
No momento que você começa a escrever um código e vai buscar referências, você está muito mais passível de notar discrepâncias de implementações que talvez não façam sentido.

Já quando a sua preocupação é "copiar, colar e adaptar pra rodar", o seu foco é ver testes passando, provavelmente ignorando completamente detalhes da implementação. 

Esse problema costuma mostrar sinais durante os code reviews, quando alguém questiona uma implementação estranha e a sua resposta for algo como:
> Me baseei no código que já existia, que estava assim.

> ou

> {{ Pessoa }} que fez, só usei de referência.

Isso é um argumento totalmente válido, principalmente se você está num momento mais de início de carreira, mas pode ser extremamente frustrante vindo de uma pessoa mais sênior, principalmente quando há dedos sendo apontados[^2] sobre a pessoa "responsável" pelo código.

E o maior problema é que quanto mais fazemos esse tipo de coisa, mais acabamos nos inclinando pro lado de ter menos senso crítico e apenas aceitar as coisas como estão, o que é ruim para sua evolução técnica.

### Práticas descontinuadas/fora do padrão
Talvez esse seja um dos mais frustrantes, já que você pode passar muito tempo trabalhando nas suas primeiras tarefas sem ajuda, pra receber uma enxurrada de comentários sobre práticas adotadas ou descontinuadas que "ninguém te contou".

Elas podem até ter sido documentadas, ou acordadas pelo time em um canal obscuro no slack, mas talvez uma mensagem ou pair a mais pudesse ter te tirado dessa enrascada de "assumir que está certo porque está assim em outro arquivo" e só copiar como as implementações já são feitas.

### Conclusão
No fim, copiar e colar pode acabar gerando um mau costume e, toda vez que você se deparar com algo que não entende, vai acabar copiando um trecho que faça funcionar, invés de entender o problema raiz ou como otimizar uma solução já existente.

E, apesar do título, a cópia sem muita atenção é um problema independentemente de ser sua primeira semana ou estar há anos em uma empresa.
Isso vai atrapalhar tanto você, quanto seus colegas que poderiam aprender também com questionamentos recebidos.

### Referências
- [Copy-and-paste programming](https://en.wikipedia.org/wiki/Copy-and-paste_programming)
- [Programmers should stop celebrating incompetence](https://world.hey.com/dhh/programmers-should-stop-celebrating-incompetence-de1a4725)

[^1]: Carece de fontes. Dito a partir de experiências pessoais apenas.

[^2]: Talk about the code, Not the Coder https://phauer.com/2018/code-review-guidelines/#talk-about-the-code-not-the-coder