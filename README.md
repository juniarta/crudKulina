# CRUD Base KOA

> A starter project with Node.js, Koa, mysql

[![JavaScript Style Guide](https://camo.githubusercontent.com/546205bd8f3e039eb83c8f7f8a887238d25532d5/68747470733a2f2f7261772e6769746861636b2e636f6d2f746f6d656b77692f6a6176617363726970742f393566626638622f6261646765732f6269672e737667)](https://github.com/airbnb/javascript)

### Project API structure

```
├── app
│   ├── controllers
│   ├── database
│   │   └── migrations
│   ├── helpers
│   ├── middlewares
│   ├── models
│   └── routes
├── app.js
├── config
└── test
    ├── integration
    └── unit
```

## Postman Docs

https://documenter.getpostman.com/view/591935/collection/RW1ejx71

## Installation

**Install Node Modules**

`yarn install`

**Config your enviroment**

`cp config/.env.example config/.env`

then run:

```
yarn run db:refresh
./start
or yarn start
open localhost:9500/api/v1
```
