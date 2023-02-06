# padroes-criacionais

## Sumário

- [padroes-criacionais](#padroes-criacionais)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este repositório de código foi criado para compor os recursos multimídia de um seminário de Engenharia de Software I sobre os padrões de projeto criacionais criados por Erich Gamma, John Vlissides, Ralph Johnson e Richard Helm. Todos os cinco códigos-fonte respectivos aos cinco padrões de projeto criacionais foram inspirados na abordagem de Alexander Shvets, autor de _Mergulho nos padrões de projeto_[<sup>1</sup>](#nota-de-rodape-1).

Este foi o segundo repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Engenharia de Software I.

<sup id="nota-de-rodape-1">1</sup> PADRÕES de projeto criacionais. In: SHVETS, Alexander. Mergulho nos Padrões de Projeto. [_S_. _l_.]: Refactoring.Guru, 2021. p. 78-159. E-book.

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Agora, para executar o código-fonte respectivo a um padrão de projeto criacional, utilize o comando `ts-node` seguido do nome do arquivo. Por exemplo:

```console
$ ts-node src/abstract-factory.ts
```