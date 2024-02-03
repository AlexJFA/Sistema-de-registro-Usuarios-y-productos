// const conecDatabe = require("../API/index")
const mysql = require("mysql");
const dotevn = require("dotenv");
dotevn.config();

const database = process.env.database;
const user = process.env.userBtc;
const pass = process.env.passwordBtc;

// objeto con propiedades de la conexion a la BCT
const BCT = {
  host: "localhost",
  database: database,
  user: user,
  password: pass,
};

// creamos la conexion a la base de datos con los paremertros de la misma
const conectionBCT = mysql.createConnection(BCT);

// nos conectamos a la base de datos
conectionBCT.connect((error, result) => {
  if (error) {
    return console.log("Error en la conexion a la BCT se accedera al MOCK");
  }
  return console.log("conexion exitosa a la BCT ");
});

// conecDatabe.end();
module.exports = conectionBCT;

// class DBConnection {
//   cnn;
//   constructor(){
//     connect();
//   }
//   connect(){
//     cnn = mysql.createConnection()
//   }
//   getInstance(){
//     if(cnn){
//       return cnn
//     }
//     cnn = mysql.createConnection
//     return this.cnn;
//   }
// }
