Esse é um projeto para o conteúdo sobre `Context API`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e crie uma nova com o seu nome:
- `git checkout -b jaiminho-project-hp-teachers`
Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

Caso fique travado ou tenha alguma dúvida, acesse a branch `gabarito` e veja como foi feita a resolução.

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

Nossa aplicação mostra os nomes de todos os professores e membros de escolas de magia até os eventos do quinto livro do universo de Harry Potter! Porem, não há nenhuma distinção entre aqueles atualmente em serviço, ou até mesmo os diretores, estão simplesmente todos juntos em uma lista.
Além disso, quando observamos o código, verficamos um clássico cenário de _prop drilling_, onde a informação passa por diversos componentes para só ao final ser utilizada.
Para corrigir essa situação, realize os exercicios e aplique seus conhecimentos em _Context API_!

#### Exercício 1

Aplique o _Context API_ para que a informação não precise passar por todos os componentes.
  - Crie uma pasta com o nome "context";
  - Crie nela um arquivo chamado "Provider.js";
  - Crie nela um arquivo chamado "Context.js";
  - Configure o createContext dentro do Context.js;
  - Configure o Provider com o context criado, e passe como value a informação do arquivo data;
  - Refatore o código para eliminar o _prop drilling_:
    - Chame o provider dentro do index e englobando o App como filho;
    - Recupere o valor de seu context somente nos componentes que ele for ser utilizado;

#### Exercício 2

Agora que você tem sua informação no estado global, faça com que os professores tenham seu nome, imagem, e matéria ensinada em seus cards.

#### Exercício 3

Faça um card distinto para diretores, onde cada um deverá ter o nome, imagem, e magia assinatura.

#### Exercício 4

No componente Teachers, separe os professores entre aqueles ativamente ensinando, e aqueles que não estão mais em hogwarts.

#### Exercício Extra

Ordene os professores por ordem alfabetica.