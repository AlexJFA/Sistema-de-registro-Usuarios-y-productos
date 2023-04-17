# Sistema de Registros


* ---------------------------------------------------------- Spanish -------------------------------------------------

# Sistema de Registros

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 15.1.6.

es un proyecto donde se implementa un front-end con Angular y un back-end con NodeJS, en el cual extraemos datos de una base de datos en msql,
y para cifrar los datos de la respuesta del servidor usamos JWT creando un token de autenticación.

# Interfaz:
implementación de formularios con dataBinding, a través de un modelo para crear el usuario que enviaremos a través de una solicitud posterior al back-ent,
enrutamiento con enrutamiento protegido por guardias,
modales de material angular, bootstrap y sweetalert,
transferencia de datos de padre a hijo,
servicios donde se implementan las solicitudes de (CRUD),
almacenamiento del token de autenticación en localStorage para el
la sesión activa del usuario.
esta aplicación se ejecuta en la ruta: http://localhost:4200/

# back-end:
implementación express, middleware, cors, JWT
creando así un modelo de vista de controlador en el que las rutas están en un archivo "router.ts" separado de la lógica de los métodos que hacen las consultas a la base de datos los cuales se llaman "connectionBCT", "controller", "controllerJWT"
esta API se ejecuta en la ruta: http://localhost:3000/

## ¿Qué necesito para ejecutar el proyecto?

* Este sistema consume una api desarrollada en nodeJS la cual realiza consultas en una base de datos en Msql.
* Por lo tanto, para poder ver el funcionamiento completo de la aplicación, debe crear una base de datos en Msql.
* Una vez que haya creado su base de datos, debe ir al archivo connectionBCT.js en este hay un Objeto llamado BCT, allí debe ingresar el nombre y las credenciales para su conexión.
* en tu base de datos debes crear 3 tablas
   - usuarios.
   - producto.
   - administrador de usuarios.
*users tiene las siguientes columnas: id(INT), nombre(VARCHAR), edad(INT), sueldo(FLOAT).
* producto tiene las siguientes columnas: id(INT), nombre(VARCHAR), creador(INT)
* usersAdmin tiene las siguientes columnas: id(INT), email(VARCHAR), pass(VARCHER)


## dependencias front-end angular
-oreja
-bootstrap-iconos
-dulcealerta2
-material

## dependencias back-end nodeJS
"analizador de cuerpo"
"corazón"
"expresar"
"express-mysql-conexión"
"jsonwebtoken"
"mysql"
"nodemonio"


## Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Andamiaje de código

Ejecute `ng generar componente nombre-componente` para generar un nuevo componente. También puede usar `ng generar directiva|tubería|servicio|clase|guardia|interfaz|enum|módulo`.


## Construir

Ejecute `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecutando pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecutar pruebas de extremo a extremo

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de su elección. Para usar este comando, primero debe agregar un paquete que implemente capacidades de prueba de un extremo a otro.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Descripción general y referencia de comandos de Angular CLI] (https://angular.io/cli).











* ---------------------------------------------------------- Ingles -------------------------------------------------

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

