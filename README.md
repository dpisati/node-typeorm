<h3 align="center">
    <img src="./.github/image.png" alt="Boilerplate" />
    <br><br>
    <b>TypeScript, TypeORM, JWT - API Boilerplate.</b>  
    <br>
</h3>

# Index

- [About](#about)
- [Functionalities](#functionalities)
- [Technologies](#technologies)
- [How to use](#how-to-use)
- [How to contribute](#how-to-contribute)

<a id="about"></a>

## :bookmark: About

This is a Boilerplate to start quick and fresh your new project with authentication and authorization using JWT, TypeORM and TypeScript. 
This project was made by [Matheus Silva](https://github.com/maateusilva) - [Youtube](https://www.youtube.com/watch?v=TjAXBLszCb0&list=PLrxGhJAruLiIJYfBkKme8I1XPvbMEgpFC&index=22).

<a id="functionalities"></a>

## :fire: Functionalities

- ### **Register**

  - Register User with: Name, Email and Password.
  - On Register: check if user alreay exists (unique email).
  - On Register: check if user added name, email and password.
  - Hash user password using bcryptjs.

- ### **Authenticate**

  - Authenticate user with Email and Password.
  - On authenticate: check if user added name and password.
  - On authenticate: check if user is valid.
  - On authenticate: check if password matches with hash.
  - Receive token as response containing: id, name, email, user type (admin / user).

- ### **Middleware**

  - Middleware check if has a token and if is valid.

<a id="technologies"></a>

## :rocket: Technologies

The project is made with:

- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [TypeORM](https://typeorm.io/#/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Nodemon](https://nodemon.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

<a id="how-to-use"></a>

## :fire: How to Use

- ### **Dependencies**

  - Is **required** to install **[Node.js](https://nodejs.org/en/)**
  - In order to run scripts and install dependencies you need to install a **package manager** (ie: **[YARN](https://yarnpkg.com/)**).

  <br>

1. First step, clone this github repository:

```sh
  $ git clone https://github.com/dpisati/node-typeorm.git
```

2. Add variables on `.env` file:

The **api** requires some environment variables stored inside the `.env` file.

Example:

File: `.env`

Content:

```text
PORT = add a port or run on 3333 by default
JWT_SECRET = strong password to be used by JWT
JWT_EXPIRES_IN = set how long the token should be valid
```

3. Configure `ormconfig.json` to connect the database. Default values as below:

```text
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "node-typeorm",
    "entities": [
       "src/app/models/*.ts"
    ],
    "migrations": [
       "src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
 }
```

4. Run the application:

```sh
  # Install dependencies.
  $ yarn install

  ## Create the database using TypeORM
  $ yarn typeorm migration:run

  # Start the API
  $ yarn run dev
```


<a id="how-to-contribute"></a>

## :recycle: How to Contribute

- Create a Fork from this repo,
- Create a branch with your feature: `git checkout -b my-feature`
- Commit changes: `git commit -m 'feat: My new feature'`
- Push to your branch: `git push origin my-feature`
