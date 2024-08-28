# Frontend - Dirário de bordo

O projeto objetiva a implementação de um diário de bordo direcionado aos registros e controle de ocorrências dos ônibus durante as viagens. Os registros serão disponibilizados em versões desktop e mobile para os motoristas e fiscais de ocorrências. O projeto [Front-DdB](https://github.com/GobiraArthur/FrontDdB.git) possibilitará o registro de ocorrências de forma remota por meio do framework frontend <b>Angular</b>.

## 📖 Sobre o projeto

O objetivo da funcionalidade frontend é a exibição das telas de endpoints, em Angular, com os contextos das informações presentes nos bancos de dados, para o CRUD de <b>vistorias e registros das ocorrências relatadas pelos motoristas e/ou fiscais de veículos</b>. A interface entre os registros de ocorrências e vistorias com o frontend será realizada via API RESTful, o que permitirá maior <b>agilidade na exibição e interação com os registros de ocorrências</b>, substituindo o uso de registros preenchidos manualmente.

Consulte **[Implantação](https://github.com/GobiraArthur/FrontDdB.git)** para saber como implantar o projeto.

## 📚 Tecnologias utilizadas

- <b>[Angular CLI](https://github.com/angular/angular-cli)</b> <small>| version 17.0.3 para construção das páginas dinâmicas de cadastro nas versões Web e Mobile.</small>
- <b>HTML5, CSS3</b> 

## 📋 Pré-requisitos

Ferramentas a serem instaladas no seu ambiente de desenvolvimento:

- <b>Node.js</b> (versão 17.x ou superior) e <b>NPM</b> (versão 9.x ou superior) para executar o Angular.

## 🛠 Configuração

Execute os comandos a seguir para instalar as bibliotecas necessárias para o funcionamento do projeto frontend:

- <b>Instale o Node.js e o Angular CLI no Linux:</b>
```
sudo apt install nodejs npm
```
```
npm install -g @angular/cli@17.0.3
```
<b>Navegue até a pasta do frontend e instale as dependências:</b>
```
npm install
```
<b>Inicie o servidor Angular:</b>
```
npm start
```
- <b>Instale o Node.js e o Angular CLI no Mac:</b>
<p><b>Instale o Homebrew</b></p>

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
<b>Instale o Node.js e o Angular CLI no macOS:</b>
```
brew update
```
```
brew install node
```
```
npm install -g @angular/cli@17.0.3
```
Navegue até a pasta do frontend e instale as dependências:
```
npm install
```
<b>Inicie o servidor Angular:</b>
```
npm start
```
- <b>Instale o Node.js e o Angular CLI no Windows:</b>
    <p><b>Baixe e instale o Node.js (inclui o NPM):</b></p>
    <p><b>Acesse Node.js e baixe o instalador para Windows.</b></p>
    <p><b>Execute o instalador e siga as instruções para concluir a instalação.</b></p>
<b>Instale o Angular CLI:</b>
```
npm install -g @angular/cli@17.0.3
```
<b>Navegue até a pasta do frontend e instale as dependências:</b>
```
npm install
```
<b>Inicie o servidor Angular</b>
```
npm start
```