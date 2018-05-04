# CRUD Kulia

> A starter project with Node.js, Koa, mysql

### Project API structure

```
├── CHANGELOG.md
├── LICENSE
├── README.md
├── app
│   ├── controllers
│   │   └── UserReviewController.js
│   ├── database
│   │   ├── index.js
│   │   └── migrations
│   │       └── 20180503170635-user_review.js
│   ├── helpers
│   │   └── Utils.js
│   ├── middlewares
│   │   ├── response.js
│   │   └── validation.js
│   ├── models
│   │   └── UserReview.js
│   └── routes
│       └── api.js
├── app.js
├── config
│   ├── database.js
│   └── index.js
├── package.json
├── start
└── test
    ├── integration
    └── unit

12 directories, 16 files
```

## Postman Docs

https://documenter.getpostman.com/view/591935/collection/RW1ejx71

## Installation

**Install Node Modules**

`yarn install`

then run:

```
yarn run db:refresh
./start
or yarn start
```
