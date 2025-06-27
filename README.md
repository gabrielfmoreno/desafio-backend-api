# API RESTful - Projeto Final Desenvolvimento Back-end I e II

##  Descrição

Este projeto é uma API RESTful desenvolvida com Node.js, que permite o gerenciamento de clientes, produtos e usuários, com autenticação via JWT, caching com invalidação automática e testes automatizados.

##  Estrutura do Projeto


 # app.js

 # configs/
    db.js

 # controllers/
    auth.js
    cliente.js
    index.js
    produto.js
    usuario.js

 # middlewares/
    auth.js
    tokenBlacklist.js
    validacaoProduto.js

 # models/

 # routes/
    auth.js
    cliente.js
    index.js
    produto.js
    usuario.js

 # services/
    cliente.js
    produto.js
    usuario.js 

 # tests/
    auth.test.js
    cliente.test.js
    jest.config.js
    produto.test.js
    usuario.test.js

 .env
 .gitignore
 package.json
 README.md
 server.js 

 
##  Funcionalidades

- [x] **/clientes** - CRUD com autenticação via JWT
- [x] **/produtos** - CRUD público
- [x] **/usuarios** - Criação e listagem
- [x] **/login** - Gera token JWT
- [x] **/logout** - Invalida o token
- [x] **/ (GET)** - Mensagem de boas-vindas
- [x] Cache com `node-cache` no endpoint `/clientes` (30s TTL)
- [x] Logs no terminal indicando uso de cache ou banco
- [x] Testes automatizados com Jest e Supertest
- [x] Validações robustas nos campos

##  Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- JWT
- bcrypt
- node-cache
- dotenv
- Jest + Supertest

##  Banco de Dados

### Tabelas obrigatórias:

- **clientes:** `id`, `nome`, `sobrenome`, `email`, `idade`
- **produtos:** `id`, `nome`, `descricao`, `preco`, `data_atualizado`
- **usuarios:** `id`, `usuario`, `senha`, `token`

Os scripts de criação e inserts estão em `/models/`.

##  Autenticação

JWT enviado no header:

Authorization: Bearer <token>


Rotas protegidas:
- Todos os endpoints de `/clientes`
- Endpoint `/logout`

##  Instalação

1. Clone o repositório  
2. Configure o arquivo `.env` com as credenciais do MySQL e JWT  
3. Rode o banco com o script SQL de `/models/`  
4. Instale as dependências: npm intall
5. Rode a aplicação: npm start
6. Execute os testes: npm test


##  Testes Automatizados

- Testes com dados válidos e inválidos
- Cobertura de autenticação e cache
- Comandos:


##  Entrega em Vídeo

- Estrutura de arquivos
- Execução de `git status` (sem pendências)
- Banco de dados com dados reais (MySQL Workbench ou DBeaver)
- Testes no Postman (com e sem token)
- Logs de cache no terminal
- Testes automatizados passando

##  Integrante

- Gabriel Moreno