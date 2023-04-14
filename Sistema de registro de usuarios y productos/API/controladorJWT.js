const conectionBCT = require("./conectionBCT");
const jwt = require("jsonwebtoken");

// ------------------------------------------------- JWT ------------------------------------------------------

const controladorJWT = {
  // ----------- metodo para crear un token con el usuaio y la clave que llevag al loguearse -------------

  createToken: (req, res) => {
    let { email, pass } = req.body;

    conectionBCT.query(
      "SELECT email, pass FROM usuariosadmin  WHERE  email=? AND pass=?",
      [email, pass],
      (error, result) => {
        if (error) return res.send("  mensaje:  Ocurrio un error " + error);
        if (result.length > 0) {
          //retorna un array con la respuesta de la base de datoa
          // llamamos a "jwt"para crear un "token, le pasamos lo que recibimos a traves del indice "0" del array result convertido en un string,
          // el segundo parametro pasamos la palabra secreta que definamos
          let token = jwt.sign(JSON.stringify(result[0]), "secreto");

          return res.send({ token });
        } else {
          // let messageError = "Usuario y/o clave incorrectos";
          res.send({ messageError: "Usuario y/o clave incorrectos" });
        }
      }
    );
  },

  //  -------- metodo para autenticar usuario solo si, el token que llega por la cabezera es valido ------------

  authorization: (req, res) => {
    if (!req.headers.authorization) return res.send("no autorizado");
    let token = req.headers.authorization;
    let usuario = "";
    if (token !== "") {
      usuario = jwt.verify(token, "secreto");
      return res.send(`Usuario  ${usuario.correo} Autenticado`);
    }
  },
};

module.exports = controladorJWT;
