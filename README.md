<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

# Clínica Médica - Backend

API backend construída com [NestJS](https://nestjs.com/) e banco de dados PostgreSQL, usando [Prisma ORM](https://www.prisma.io/).

---

## 🚀 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

---

## ⚙️ Instalação e execução local

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

```
### 2. Configurar variáveis de ambiente

```bash
Crie um arquivo .env na raiz do projeto com as variáveis:

PORT=3000
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=postgres
DATABASE=nest
```

### 3. Rodar banco e backend com Docker Compose
O projeto já possui um docker-compose.yml configurado para subir o banco PostgreSQL e a aplicação.

```bash

docker-compose up --build

```

Isso vai:

Construir a imagem do backend

Subir o container do PostgreSQL

Rodar a aplicação backend em http://localhost:3000


### 4. Gerar cliente Prisma (para rodar local sem Docker)
Se preferir rodar localmente sem Docker:


```bash

npm install
npx prisma generate
npm run start:dev

```


### 5. Alternativa: rodar banco localmente (se Docker Compose não funcionar)

Caso não consiga rodar com Docker Compose, você pode criar o banco PostgreSQL na sua máquina manualmente.


Instale o PostgreSQL localmente (exemplo para Ubuntu/Debian):

```bash
sudo apt-get install postgresql postgresql-contrib
```
Crie o banco de dados e usuário:

```bash
CREATE DATABASE nest;
CREATE USER postgres WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE nest TO postgres;
```
Atualize o .env para conectar ao banco local:

env

```bash
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DATABASE=nest
```
Instale dependências e gere o cliente Prisma:

```bash
npm install
npx prisma generate
```
Rode o backend em modo desenvolvimento:

```bash
npm run start:dev
```