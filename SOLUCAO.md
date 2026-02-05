# Documentação da Solução - API Mundo Geek

## 1. Arquitetura da Solução
A API foi desenvolvida seguindo os princípios de **Divisão de Responsabilidades (SoC)** e **Arquitetura em Camadas**, garantindo um código limpo, coeso e de fácil manutenção.

### Camadas do Projeto:
- **Entities:** Modelagem dos dados utilizando TypeORM, definindo as tabelas e relacionamentos (1:N).
- **Services:** Contém a lógica de negócio da aplicação, isolando-a dos controladores.
- **Controllers:** Responsáveis por lidar com as requisições HTTP e retornar as respostas ao cliente.
- **Validates:** Esquemas de validação de dados utilizando a biblioteca Zod.
- **Routes:** Definição dos endpoints da API.
- **Database:** Configuração da conexão com o banco de dados PostgreSQL via TypeORM.

## 2. Decisões de Design
- **TypeScript:** Escolhido para trazer tipagem estática ao JavaScript, reduzindo erros em tempo de desenvolvimento.
- **TypeORM:** Utilizado pela sua facilidade em lidar com relacionamentos complexos e suporte a decoradores.
- **Zod:** Implementado para garantir que os dados de entrada estejam no formato correto antes de processar a lógica de negócio.
- **UUID:** Utilizado para os IDs das entidades, garantindo unicidade global e maior segurança.

## 3. Relacionamento 1:N
O relacionamento entre `Categoria` e `Produto` foi implementado da seguinte forma:
- Uma **Categoria** pode ter muitos **Produtos** (`@OneToMany`).
- Um **Produto** pertence a apenas uma **Categoria** (`@ManyToOne`).
- Foi configurado o `onDelete: "CASCADE"` para que, ao excluir uma categoria, seus produtos vinculados também sejam removidos (conforme a necessidade de integridade).

## 4. Como Executar a API Localmente

### Pré-requisitos:
- Node.js instalado.
- Banco de dados PostgreSQL rodando.

### Passos:
1. Clone o projeto ou extraia o arquivo ZIP.
2. No terminal, acesse a pasta do projeto e instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env` (use o `.env.example` como base).
4. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
5. A API estará disponível em `http://localhost:3000`.

---
*Desenvolvido como parte da atividade Hands-on: Construindo uma API de Gerenciamento de Loja.*
