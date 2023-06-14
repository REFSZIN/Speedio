<!-- markdownlint-disable -->
![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=REFSZIN%20&fontAlignY=40&color=gradient)
<div align="center">
     <img height="300px" src="https://speedio.com.br/4.1/assets/img/logo-speedio.svg">
<h1 align="center">
   Speedio - Backend
</h1>
<hr>
  <h3>Built With</h3>
  <img src="https://img.shields.io/badge/Postgres-316192?style=for-the-badge&logo=Postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Docker-316192?style=for-the-badge&logo=Docker&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-404D59?style=for-the-badge&logo=Prisma&logoColor=blue" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=Express&logoColor=green" height="30px"/>
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

# Description

Backend application NodeJs + Typescript para API, Jest para testes de int e unit, Prisma ORM para PostgreSQL + Redis para Cache</br>

</br>
<h1 align="center margin 10px">Librariess<h1>

### 
- [@faker-js/faker](https]//www.npmjs.com/package/@faker-js/faker])
- [@types/bcrypt](https]//www.npmjs.com/package/@types/bcrypt)
- [@types/cors](https]//www.npmjs.com/package/@types/cors)
- [@types/express](https]//www.npmjs.com/package/@types/express)
- [@types/jest](https]//www.npmjs.com/package/@types/jest)
- [@types/jsonwebtoken](https]//www.npmjs.com/package/@types/jsonwebtoken) 
- [@types/node](https]//www.npmjs.com/package/@types/node)
- [@types/supertest](https]//www.npmjs.com/package/@types/supertest) 
- [@typescript-eslint/eslint-plugin](https]//www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https]//www.npmjs.com/package/@typescript-eslint/parser) 
- [dotenv-cli](https]//www.npmjs.com/package/dotenv-cli) 
- [eslint](https]//www.npmjs.com/package/eslint)
- [eslint-config-prettier](https]//www.npmjs.com/package/eslint-config-prettier)
- [eslint-import-resolver-typescript](https]//www.npmjs.com/package/eslint-import-resolver-typescript) 
- [eslint-plugin-boundaries](https]//www.npmjs.com/package/eslint-plugin-boundaries)
- [eslint-plugin-import](https]//www.npmjs.com/package/eslint-plugin-import) 
- [eslint-plugin-prettier](https]//www.npmjs.com/package/eslint-plugin-prettier) 
- [git-commit-msg-linter](https]//www.npmjs.com/package/git-commit-msg-linter)
- [husky](https]//www.npmjs.com/package/husky)
- [jest](https]//www.npmjs.com/package/jest) 
- [lint-staged](https]//www.npmjs.com/package/lint-staged) 
- [nodemon](https]//www.npmjs.com/package/nodemon)
- [prettier](https]//www.npmjs.com/package/prettier)
- [prisma](https]//www.npmjs.com/package/prisma)
- [supertest](https]//www.npmjs.com/package/supertest)
- [ts-jest](https]//www.npmjs.com/package/ts-jest)
- [ts-node](https]//www.npmjs.com/package/ts-node)
- [tsconfig-paths](https]//www.npmjs.com/package/tsconfig-paths)
- [ttypescript](https]//www.npmjs.com/package/ttypescript)
- [typescript](https]//www.npmjs.com/package/typescript)
- [typescript-transform-paths](https]//www.npmjs.com/package/typescript-transform-paths)
- [@brazilian-utils/brazilian-utils](https]//www.npmjs.com/package/@brazilian-utils/brazilian-utils)
- [@prisma/client](https]//www.npmjs.com/package/@prisma/client)
- [@types/axios](https]//www.npmjs.com/package/[@types/axios)
- [axios](https]//www.npmjs.com/package/axios)
- [bcrypt](https]//www.npmjs.com/package/bcrypt)
- [cors](https]//www.npmjs.com/package/cors)
- [dayjs](https]//www.npmjs.com/package/dayjs)
- [dotenv](https]//www.npmjs.com/package/dotenv) 
- [dotenv-expand](https]//www.npmjs.com/package/dotenv-expand) 
- [express](https]//www.npmjs.com/package/express)
- [express-async-errors](https]//www.npmjs.com/package/express-async-errors) 
- [http-status](https]//www.npmjs.com/package/http-status) 
- [joi](https]//www.npmjs.com/package/joi) 
- [jsonwebtoken](https]//www.npmjs.com/package/jsonwebtoken) 
- [redis](https]//www.npmjs.com/package/redis) 
- [reflect-metadata](https]//www.npmjs.com/package/reflect-metadata)
<br/>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env.development` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
5. Run all migrations

```bash
npm run migration:run
```

6. Seed db

```bash
npm run dev:seed
```

6. Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

1. Follow the steps in the last section
1. Configure the `.env.test` file using the `.env.example` file (see "Running application locally or inside docker" section for details)
1. Run all migrations

```bash
npm run migration:run
```

3. Run test:
   (locally)

```bash
npm run test
```

(docker)

```bash
npm run test:docker
```

## Building and starting for production

```bash
npm run build
npm start
```

## Running migrations or generate prisma clients

Before running migrations make sure you have a postgres db running based on `.env.development` or `.env.test` file for each environment. You can start a postgres instance by typing `npm run dev:postgres` or `npm run test:postgres`. The host name is the name of the postgres container inside docker-compose file if you are running the application inside a docker container or localhost if you are running it locally.

You can operate on databases for different environments, but it is necessary to populate correct env variables for each environment first, so in order to perform db operations type the following commands:

- `npm run dev:migration:run` - run migrations for development environment by loading envs from .env.development file. It uses [dotenv-cli](https://github.com/entropitor/dotenv-cli#readme) to load envs from .env.development file.
- `npm run test:migration:run` - the same, but for test environment

- `npm run dev:migration:generate -- --name ATOMIC_OPERATION_NAME` - generate and run migration and prisma client for development environment by loading envs from .env.development file. Replace `ATOMIC_OPERATION_NAME` by the name of the migration you want to generate.

## Switching between environments

In order to switch between development and test environments you need to shutdown the current postgres instance if it is running and start the new one.

If you are in development environment:

```bash
npm run dev:postgres:down
```

And then

```bash
npm run test:postgres
```

If you are in test environment:

```bash
npm run test:postgres:down
```

And then

```bash
npm run dev:postgres
```

## Running application locally or inside docker

`.env.development` and `.env.test` must be changed if you and to run the application locally or inside docker. You can populate files based on `.env.example` file, but you need to consider the following:

- Running application locally (postgres and node):

Add your postgres credentials and make sure to create given database before running the application.

- Running application inside docker (postgres and node):

Set `POSTGRES_HOST` to `drivent-postgres-development` for `.env.development` and `drivent-postgres-test` for `.env.test` file. It is the name of the postgres container inside docker-compose file. Docker Compose will start the postgres container for you, create the database and host alias for you.

- Running application locally (node) but postgres is running inside docker:

Set `POSTGRES_HOST` to `localhost` for `.env.development` and `localhost` for `.env.test` file. Docker compose is configured to expose postgres container to your localhost.

## What to do when add new ENV VARIABLES

There are several things you need to do when you add new ENV VARIABLES:
- Add them to `.env.example` file
- Add them to your local `.env.development` and `.env.test` files
- Add them to your docker-compose.yml file (just the name, not the value). Only envs listed in the environment section will be exposed to your docker container.
- Add them (prod version) to your github repo secrets. They will be used to generate the `.env` file on deploy.
- Add them (prod version) to test.yml file on .github/workflows/test.yml.
