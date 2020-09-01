<h3 align="center">
    <img alt="Logo" title="#logo" width="320px" src="https://raw.githubusercontent.com/RayzaOliveira/nave/master/src/assets/logo.png">
    <br />
    <br />
    <b>Desafio de Front-End</b>
    <br />
</h3>
<p align="center">
  <a href="https://www.linkedin.com/in/rayza-oliveira-costa-482658129/">
    <img alt="Made by Rayza" src="https://img.shields.io/badge/made%20by-Rayza%20Oliveira-black">
  </a>
  <img alt="License" src="https://img.shields.io/badge/licence-MIT-black">
</p>

# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)
- [Dificuldades](#dificuldades)

<a id="sobre"></a>

## :bookmark: Sobre

O <strong>Nave</strong> é um  sistema que consiste em uma web app para visualização e criação dos navers, possuindo informações como: nomes, data de nascimento, cargos, data de adimissão e projetos que participou.
Tendo em vista que mais de 70% dos usuário de páginas web acessam de seu celulares e dispositivos móveis, o projeto foi desenvolvido utilizando o conceito de <strong>Mobile-First</strong>.

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [ReactJS](https://reactjs.org/)
- [ReactRouterDom](https://www.npmjs.com/package/react-router-dom)
- [Axios](https://www.npmjs.com/package/axios)
- [React-Modal](https://www.npmjs.com/package/react-modal)
- [Netilify](https://www.netlify.com/)

## :heavy_check_mark: :computer: Resultado Web e Mobile

- O site está disponível: **[Nave](https://nave-rs.netlify.app/)**

<h1 align="center">
	<img src="https://github.com/RayzaOliveira/nave/blob/master/assets/web.gif?raw=true" alt="Apresentacao web" />
</h1>

<h1 align="center">
	<img src="https://github.com/RayzaOliveira/nave/blob/master/assets/app.gif?raw=true" alt="Apresentacao app" />
</h1>

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone :

```sh
  $ git clone https://github.com/RayzaOliveira/nave.git
```

2. Executando a Aplicação:

```sh
  # Acesse o diretório do projeto
  $ cd nave
  # Instale as dependências
  $ npm install
  or
  $ yarn
  # Inicie a aplicação web
  $ npm start
  or
  $ yarn start
```

<a id="como-contribuir"></a>

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

<a id="dificuldades"></a>

## 📌 Dificuldades

 - Houve dificuldade no desenvolvimento do componente de confirmação de exclusão, pois, o mesmo não foi possível fazer de forma simplificada. Porém pode-se utilizar a lib de sweet-alert para esse tipo de confimação. Não foi utilizado, para que não quebrasse o layout proposto no Figma.
 - Nos campos de idade e tempo de empresa, foi alterado para data de nascimento e data de admissão, visto que a api entregue, espera uma data em ambas. Sendo assim, com essas informações pode-se obter a idade e tempo de admissão.  


Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/RayzaOliveira/nave/blob/master/LICENCE.md) para mais detalhes.

---

<h4 align="center">
    Feito com 🖤 by <a href="https://www.linkedin.com/in/rayza-oliveira-costa-482658129/" target="_blank">Rayza Oliveira</a>
</h4>