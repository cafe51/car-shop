# Loja de Carros

## Introdução

Nesse projeto eu construí uma API com CRUD para gerenciar uma concessionária de veículos utilizando Node.Js com MongoDB e aplicando os princípios da Programação Orientada a Objetos(POO). A api está online, basta acessar https://car-shop-japhe.up.railway.app/

## Sumário

- [Introdução](#introdução)
- [Ferramentas utilizadas](#ferramentas-utilizada)
- [CRUD](#crud)
- [MongoDB](#mongodb)
- [Mongoose](#mongoose)
- [POO](#poo)
- [SOLID](#solid)
- [Aprendizados](#aprendizados)
- [Testes unitários e tratamento de erros](#testes-unitários-e-tratamento-de-erros)
- [Instruções para utilizar a aplicação](#instruções-para-utilizar-a-aplicação)
- [Documentação](#documentação-endpoints)
- [Histórico de Commits](#histórico-de-commits)

## Ferramentas utilizada

**Back End:** Docker, MongoDB, NodeJS, Mongoose, Testes Unitários com Mocha.

## CRUD

CRUD é um acrônimo para Create, Read, Update and Delete. Em português Criar, Ler, Atualizar e Deletar registros, nesse projeto não trabalhei direto com um banco de dados para fazer as operações, fiz as operações por meio dos endpoints e utilizei mongoose para fazer a comunicação com o banco de dados!

## MongoDB

Segundo o [Site oficial do MongoDB](https://www.mongodb.com/pt-br/what-is-mongodb), o MongoDB é um banco de dados de documentos com a escalabilidade e flexibilidade que você deseja junto com a consulta e indexação que você precisa.

## Mongoose

Segundo [esse artigo do freecodecamp](https://www.freecodecamp.org/portuguese/news/introducao-ao-mongoose-para-mongodb/), o Mongoose é um biblioteca de Modelagem de Dados de Objeto (ou ODM, do inglês: Object Data Modeling) para MongoDB e Node.js.

## POO

A Programação Orientada a Objetos (POO), um paradigma de programação, baseia-se na organização de comportamentos e estados em objetos, que são agrupados por suas semelhanças em classes. Essas classes orientam o comportamento do objeto, definido por métodos e atributos. No projeto em questão, consegui aplicar e solidificar minha compreensão dos quatro pilares fundamentais da POO: herança, polimorfismo, abstração e encapsulamento.

## SOLID

SOLID ou S.O.L.I.D é um acrônimo para 5 princípios diferentes, cada princípio foi utilizado nesse projeto e ajudou a criar um código mais limpo e organizado, podendo o código ser reaproveitado por estar componetizado e de fácil refatoração. Cada letra do SOLID tem o seguinte significado: 
- S — Single Responsiblity Principle (Princípio da responsabilidade única)
- O — Open-Closed Principle (Princípio Aberto-Fechado)
- L — Liskov Substitution Principle (Princípio da substituição de Liskov)
- I — Interface Segregation Principle (Princípio da Segregação da Interface)
- D — Dependency Inversion Principle (Princípio da inversão da dependência)

## Aprendizados

Avancei significativamente nos meus conhecimentos em MongoDB, SOLID, POO e Node, criando uma API completa baseada nos princípios da Programação Orientada a Objetos (POO). Efetuei uma abstração total das classes, estabelecendo funções precisas para cada método, alinhadas ao conceito de encapsulamento. Utilizei herança e polimorfismo para que classes recentes pudessem assumir e modificar comportamentos de classes existentes.

Aprimorei minha capacidade de trabalhar com MongoDB usando o mongoose, um ODM potente para interagir com o banco de dados. Reforcei minha experiência na criação e utilização de interfaces, classes, instâncias e objetos, enfatizando os conceitos fundamentais da POO.

## Instruções para utilizar a aplicação

A api está online, basta acessar https://car-shop-japhe.up.railway.app/

Para utilizar a aplicação localmente você precisará ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o repositório, você precisará usar o comando `docker-compose up -d` para criar e iniciar o container e depois executar o terminal bash do container e instalar as dependências do projeto com o comando `npm install` . O comando deverá ser feito via terminal no diretório em que está o arquivo **docker-compose.yml**.

Após o container subir você poderá fazer as requisições utilizando um cliente HTTP (insomnia, postman, httpie e etc);

E pronto! A API está agora pronta para ser usada localmente no endereço http://localhost:3001

## Documentação (endpoints)

### 🚗 Cars
| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de um veiculo | https://car-shop-japhe.up.railway.app/cars

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo:  </summary>
  
```
{
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary> A resposta da requisição é a seguinte com status 201  </summary>
  
```
{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna erro <code>400</code> caso a requisição receba um objeto vazio; <br>
  - A rota retorna erro <code>400</code> ao tentar criar um carro com quantidade de assentos inferior a 2;<br>
  - A rota retorna erro <code>400</code> ao tentar criar um carro com quantidade de portas inferior a 2;<br>
  - A rota retorna erro <code>400</code> ao tentar criar um carro sem `model`, `year`, `color` e `buyValue`;<br>
  - A rota retorna erro <code>400</code> ao tentar criar um carro sem `doorsQty` e `seatsQty`;<br>
  - Não é possível criar um carro se os atributos `model`, `year`, `color`, `buyValue`, `doorsQty` e `seatsQty` estiverem com tipos errados;<br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de carros cadastrados | https://car-shop-japhe.up.railway.app/cars

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  ...
]

```

</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna um carro atravéz do id | https://car-shop-japhe.up.railway.app/cars/:id

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
  - É disparado o erro <code>404</code> <code>Object not found caso o id possua 24 caracteres</code>, mas seja inválido; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `PUT` | Atualizar um carro atravéz do id | https://car-shop-japhe.up.railway.app/cars/:id

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- É disparado o erro <code>404</code> <code>Object not found caso o id possua 24 caracteres</code>, mas seja inválido; <br>
- É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
- É disparado o erro <code>400</code> caso o <code>body</code> esteja vazio; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `DELETE` | Deletar um carro atravéz do id | https://car-shop-japhe.up.railway.app/cars/:id

* A resposta da requisição é 204 e sem body em caso de sucesso

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- É disparado o erro <code>404</code> <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido; <br>
- É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
</details>
<br>
<br>


### 🛵 Motorcyle

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de uma moto | https://car-shop-japhe.up.railway.app/motorcycles

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo:  </summary>
  
```
{
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary> A resposta da requisição é a seguinte com status 201  </summary>
  
```
{
   _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- A rota retorna erro <code>400</code> caso a requisição receba um objeto vazio;
- A rota retorna erro <code>400</code> ao tentar criar uma moto com `category` diferente de `Street`, `Custom` ou `Trail`; <br>
- A rota retorna erro <code>400</code> ao tentar criar uma moto com `category` diferente de string; <br>
- A rota retorna erro <code>400</code> ao tentar criar uma moto com `engineCapacity` menor ou igual a zero; <br>
- A rota retorna erro <code>400</code> ao tentar criar uma moto com `engineCapacity` maior que 2500; <br>
- A rota retorna erro <code>400</code> ao tentar criar um moto sem `model`, `year`, `color` e `buyValue`; <br>
- A rota retorna erro <code>400</code> ao tentar criar um moto sem `category` e `engineCapacity`; <br>
- Não é possível criar uma moto se os atributos `model`, `year`, `color`, `buyValue`, `category` e `engineCapacity` estiverem com tipos errados; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de motos cadastradas | https://car-shop-japhe.up.railway.app/motorcycles

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
  ...
]

```

</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma moto atravéz do id | https://car-shop-japhe.up.railway.app/motorcycles/:id

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
  - É disparado o erro <code>404</code> <code>Object not found caso o id possua 24 caracteres</code>, mas seja inválido; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `PUT` | Atualizar um carro atravéz do id | https://car-shop-japhe.up.railway.app/motorcycles/:id

<details>
  <summary> A resposta da requisição é a seguinte com status 200  </summary>
  
```
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- É disparado o erro <code>404</code> <code>Object not found caso o id possua 24 caracteres</code>, mas seja inválido; <br>
- É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
- É disparado o erro <code>400</code> caso o <code>body</code> esteja vazio; <br>
</details>
<br>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `DELETE` | Deletar um carro atravéz do id | https://car-shop-japhe.up.railway.app/motorcycles/:id

* A resposta da requisição é 204 e sem body em caso de sucesso

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
- É disparado o erro <code>404</code> <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido; <br>
- É disparado o erro <code>400</code> <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres; <br>
</details>
<br>
<br>