# Frontend - Dirário de bordo

O projeto objetiva a implementação de um diário de bordo direcionado aos registros e controle de ocorrências dos ônibus durante as viagens. Os registros serão disponibilizados em versões desktop e mobile para os motoristas e fiscais de ocorrências. O projeto [Front-DdB](https://github.com/GobiraArthur/FrontDdB.git) possibilitará o registro de ocorrências de forma remota por meio dos frameworks <b>Django, Angular e Kivy</b>.

## 📖 Sobre o projeto

O objetivo da funcionalidade frontend é a exibição das telas de endpoints, em Angular, com os contextos das informações presentes nos bancos de dados, em Django, para o CRUD de vistorias e <b>registros das ocorrências relatadas pelos motoristas e/ou fiscais de veículos</b>. A comunicação entre o backend e frontend será realizada por meio do API Kivy framework, o que permitirá maior <b>agilidade na elaboração dos registros de ocorrências</b> os quais passarão a ser via API em substituição aos registros preenchidos manualmente. 

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
cd frontend
```
```
npm install
```
<b>Inicie o servidor Angular:</b>
```
ng serve
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
cd frontend
```
```
npm install
```
<b>Inicie o servidor Angular:</b>
```
ng serve
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
cd frontend
```
```
npm install
```
<b>Inicie o servidor Angular</b>
```
ng serve
```