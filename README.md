# Example CRUD API with NestJS and PostgreSQL without any ORM

## Description

This example uses a mock database from [UIBakery](https://uibakery.io/sql-playground) which does not have primary keys on their tables. That's why we dont use any ORM. Project is experimental and WIP. If you find any bug create a issue. All contribitions are welcome. 

## Installation

First, you should provide your database credentials at [common/envs/.env.txt](/src/common/envs/.env.txt) and edit the file name as `.env` (erase the .txt).

### Then proceed with given steps below:  

<br>

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

