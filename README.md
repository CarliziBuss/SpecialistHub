# SpecialistHub
A SpecialistHub API é uma aplicação desenvolvida em Node.js que gerencia usuários e suas especializações. 

Esta API permite que os usuários se cadastrem e adicionem suas especializações, fornecendo uma 
plataforma para encontrar especialistas em diversas áreas.

A API consiste em duas entidades principais: Usuário e Especialização. A relação entre elas é de um para muitos, 
ou seja, um usuário pode ter várias especializações.

Tecnologias Utilizadas
- Node.js: Plataforma de desenvolvimento para construir a aplicação backend.
- Express.js: Framework web para lidar com rotas e middlewares HTTP.
- Sequelize: ORM (Object-Relational Mapping) para interação com o banco de dados SQL.
- MySQL: Banco de dados relacional para armazenamento de dados.
- Body-parser: Middleware para processar corpos de requisição HTTP.

Para executar a API em seu ambiente local, siga estas etapas:
  1. Clone o repositório do projeto.
  2. Instale as dependências utilizando o npm ou yarn.
  3. Configure um banco de dados MySQL e atualize as credenciais no arquivo sequelize.js.
  4. Execute o comando node app.js para iniciar o servidor.
Certifique-se de ter o Node.js e o MySQL instalados em seu sistema antes de prosseguir com a configuração.
