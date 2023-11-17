# Objetivo
 
Este projeto tem o objetivo de demonstrar conceitos e formas de utilizar o framework Cypress para a criação de testes e2e e de API

# Pré-requisitos

## Sistemas Operacionais

- macOS 10.9 e superiores (Intel ou Apple Silicon 64-bit (x64 ou arm64))
- Linux 
    - Ubuntu 12.04 e superiores
    - Fedora 21
    - Debian 8 (x86_64 ou Arm 64-bit (x64 or arm64))
- Windows 7 e superiores (somente 64-bit)

    Para Linux Ubuntu/Debian executar a instalação

    apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

    Para CentOS executar a instalação

    yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib

    Para Amazon Linux 2023 executar a instalação

    dnf install -y xorg-x11-server-Xvfb gtk3-devel nss alsa-lib

## NodeJs
    - Node.js 14.x
    - Node.js 16.x
    - Node.js 18.x e superiores
    - Gerenciador de Pacotes do NodeJS (npm)

# Cypress

Framework de testes automatizados usando JavaScript

## Organização

O Cypress possui a seguinte organização de pastas:
    - e2e: arquivos de testes a serem realizados no formato <nome>.cy.js
    - fixtures: arquivos com dados estáticos a serem utilizados nos testes
    - downloads: arquivos baixados durante a execução dos testes
    - screenshots: capturas de telas realizadas durante a execução dos testes. Obs.: somente se tiver o comando cy.screenshot() no teste
    - videos: videos dos testes realizados
    - support: arquivos para comportamento reutilizavel nos testes

# Projeto

## Instalação

Para instalar os recursos necessários digite na raiz do projeto o comando `npm install`

## Variaveis de Ambiente

Este projeto foi configurado para utilizar variaveis de ambiente. Para o correto funcionamento deve-se:
- na pasta `cypress`, criar uma pasta com nome `config`
- na pasta `config` criar um arquivo como nome `development.json` com o conteudo abaixo:

`
{
    "baseUrl": "https://www.saucedemo.com/",
    "env": {
      "standardUser": "standard_user",
      "lockedOutUser": "locked_out_user",
      "problemUser": "problem_user",
      "performanceGlitchUser": "performance_glitch_user", 
      "password": "secret_sauce",
      "wrongUser": "wrong_user",
      "wrongPassword": "wrong_password",
      "urlCep": "https://viacep.com.br/ws"
    }
}
`
## Execução dos Testes

Existe algumas maneiras de executar os testes, sendo:
- Interface Gráfica: `npm run cy-open:dev`
- Linha de Comando sem gravação de video dos testes: `npm run cy-run:dev`    
- Linha de Comando gravando video dos testes: `npm cy-run-video:dev`
- Linha de Comando executando testes somente de backend: `npm run cy-run-backend:dev`
- Linha de Comando executando testes somente da pagina Sauce Demo: `npm run cy-run-sauce:dev`

# Referências
- https://nodejs.org/pt-br/
- https://www.cypress.io/

# Ferramentas para o Desenvolvimento

    As seguintes ferramentas são necessárias e/ou sugeridas para o projeto

## Instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/pt-br)

## IDE
- [VSCode](https://code.visualstudio.com/download)