const conectionBCT = require("./conectionBCT");
const jwt = require("jsonwebtoken");

// En caso de error en la conexion con la base de datos usamoe el Array local como base de datos ficticia
const usersAdmins = [
  { name: "Alexander", email: "alexander@gmail.com", id: 1, pass: 12345 },
  { name: "Katherin", email: "katherin@gmail.com", id: 2, pass: 12345 },
];

// ------------------------------------------------- manejo de error. ------------------------------------------------------

const errorResponse = (error, res) => {
  res.status(400).send({
    error: error,
    message: "Solicitud inválida",
  });
};

// ------------------------------------------------- JWT ------------------------------------------------------

const controladorJWT = {
  // ----------- metodo para crear un token con el usuaio y la clave que llevag al loguearse -------------

  createToken: (req, res) => {
    // let { email, pass } = req.body;
    let reqUser = { email: req.body.email, pass: req.body.pass };
    let token;
    let autenticado;

    conectionBCT.query(
      "SELECT email, pass FROM usuariosadmin  WHERE  email=? AND pass=?",
      [reqUser.email, reqUser.pass],
      (error, result) => {
        try {
          function autentication(email, pass) {
            autenticado =
              usersAdmins.some((user) => user.email == email) &&
              usersAdmins.some((user) => user.pass == pass);

            if (!autenticado) {
              return { messageError: "Usuario y/o clave incorrectos" };
            }
            token = jwt.sign(JSON.stringify(reqUser), "secreto");
            return { token };
          }

          if (error) {
            return res.send(autentication(reqUser.email, reqUser.pass));
            // return res.send({ token });
          }

          if (result.length > 0) {
            //retorna un array con la respuesta de la base de datos
            // llamamos a "jwt"para crear un "token, le pasamos lo que recibimos a traves del indice "0" del array result convertido en un string,
            // el segundo parametro pasamos la palabra secreta que definamos
            token = jwt.sign(JSON.stringify(result[0]), "secreto");

            return res.send({ token });
          }

          return res.send({ messageError: "Usuario y/o clave incorrectos" });
        } catch (error) {
          errorResponse(error, res);
        }
      }
    );
  },

  //  -------- metodo para autenticar usuario solo si, el token que llega por la cabezera es valido ------------

  authorization: (req, res, next) => {
    if (!req.headers.authorization) return res.send("no autorizado");
    let token = req.headers.authorization;
    let usuario = "";
    if (token !== "") {
      usuario = jwt.verify(token, "secreto");
      // return res.send(`Usuario  ${usuario.correo} Autenticado`);
      req.user = usuario.correo;
      next();
    }
  },
};

module.exports = controladorJWT;
