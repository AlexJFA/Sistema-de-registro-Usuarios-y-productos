// const conecDatabe = require("../API/index")
const mysql = require("mysql");

// objeto con propiedades de la conexion a la BCT
const BCT = {
  host: "localhost",
  database: "alex",
  user: "root",
  password: "Alex2378",
};

// creamos la conexion a la base de datos con los paremertros de la misma
const conectionBCT = mysql.createConnection(BCT);

// nos conectamos a la base de datos
conectionBCT.connect((error, result) => {
  if (error) {
    return error;
  }
  return console.log("conexion exitosa a la BCT ");
});

// conecDatabe.end();
module.exports = conectionBCT;
