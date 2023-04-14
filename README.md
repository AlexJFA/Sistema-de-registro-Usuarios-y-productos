# Sistema de Registros

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

is a project where a front-end with Angular and a back-end with NodeJS are implemented, in which we extract data from a database in msql,
and to encrypt the data from the server response we use JWT creating an authentication token.

# Front-end: 
implementation of forms with dataBinding, through a model to create the user that we will send through a post request to the back-ent,
routing with routing protected by guards,
angular material modals, bootstrap and sweetalert,
data transfer from parent to child,
services where requests for the (CRUD) are implemented,
storage of authentication token in the localStorage for the
the active session of the user.
this app runs on the path: http://localhost:4200/

# back-end:
express implementation, middleware, cors, JWT
thus creating a controller view model in which the routes are in a file "router.ts" separated from the logic of the methods that make the queries to the database which are called "connectionBCT", "controller", "controllerJWT "
this api runs on the path: http://localhost:3000/

## What do I need to run the project?

* This system consumes an api developed in nodeJS which performs queries in a database in Msql.
* Therefore, in order to see the full operation of the application, you must create a database in Msql.
* Once you have created your database, you must go to the file connectionBCT.js in this there is an Object called BCT, there you must enter the name and credentials for your connection.
* in your database you should create 3 tables
  - users.
  - product.
  - users admin.
* users has the following columns: id(INT), nombre(VARCHAR), edad(INT), sueldo(FLOAT).
* product has the following columns: id(INT), nombre(VARCHAR), creador(INT)
* usersAdmin has the following columns: id(INT), email(VARCHAR), pass(VARCHER)


## dependencies front-end angular
-bootstrap
-bootstrap-icons
-sweetalert2
-material

## dependencies back-end nodeJS
"body-parser"
"cors"
"express"
"express-mysql-connection"
"jsonwebtoken"
"mysql"
"nodemon"


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

