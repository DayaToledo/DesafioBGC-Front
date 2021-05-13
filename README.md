<h1 align="center">Cupido Online</h1>
<h3 align="center">Aplicação desenvolvida para o desafio prático do Processo Seletivo da empresa BGC Brasil</h3>

&nbsp;&nbsp;
## 🔍 Sobre

A aplicação é um site responsivo que possibilita que uma pessoa envie uma mensagem anônima para seu crush por e-mail. Basta o usuário informar o nome e e-mail do destinatário, além da mensagem que deseja enviar.
</br></br>
Além de mandar o e-mail para o destinatário, o site também permite o login de usuários existentes e cadastramento de novos usuários.

&nbsp;
## ⚒ Tecnologias

Essa aplicação foi desenvolvida utilizando:
* [ReactJS](https://pt-br.reactjs.org)
* [Styled Components](https://styled-components.com)
* [AWS Cognito](https://aws.amazon.com/pt/cognito/)

&nbsp;
## 📸 Screenshots
<p align="center">
  <img width="auto" style="border-radius: 5px" alt="Tela de incial do site" src="https://user-images.githubusercontent.com/55140068/118194057-1e48b780-b41f-11eb-9ca1-94b0b7c5a96c.png">
</p>

&nbsp;
## 🚀 Rodando a aplicação

Você vai precisar ter instalado em sua máquina as seguintes ferramentas:
* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [YarnJS](https://yarnpkg.com)

```bash
# Clone este repositório
$ git clone "https://github.com/DayaToledo/DesafioBGC-Front"

# Acesse a pasta do projeto no terminal/cmd
$ cd DesafioBGC-Front

# Instale as dependências
$ yarn install
```
Além de baixar o projeto e instalar as dependências, o projeto também requer algumas variáveis de ambiente, sendo assim:
1. Adicione uma arquivo nomeado .env na raiz do projeto
2. Dentro adicione:

```bash
REACT_APP_COGNITO_USER_POOL_ID=SUA_USER_POOL_ID_AQUI
REACT_APP_COGNITO_APP_CLIENT_ID=SUA_APP_CLIENT_ID_AQUI
REACT_APP_COGNITO_IDENTITY_POOL_ID=SUA_IDENTITY_POOL_ID_AQUI
```

3. Salve o arquivo


Agora basta rodar o projeto:

```bash
# Execute a aplicação
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

&nbsp;
## 📃 Licença
Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório

&nbsp;
## 👩‍💻 Autor
Feito por Dayana Toledo. [Entre em contato!](https://www.linkedin.com/in/toledodayana/)
