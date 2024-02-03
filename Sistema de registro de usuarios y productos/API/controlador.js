const { stringify } = require("querystring");
const conectionBCT = require("./conectionBCT");

// En caso de error en la conexion con la base de datos usamoe el Array local como base de datos ficticia


const localUsers = [
  { name: "Alex", age: 31, salary: 2000, id: 1 },
  { name: "kathe", age: 27, salary: 30000, id: 2 },
  { name: "Mare", age: 24, salary: 100000, id: 3 },
];

const localProducts = [
  { name: "Teclado", creator: 2, id: 1 },
  { name: "Cpu", creator: 1, id: 2 },
  { name: "Laptop", creator: 1, id: 3 },
];

// ------------------------------------------------- usuarios ------------------------------------------------------

const controlador = {
  // -------  traer Usuarios ---------
  getAllUsers: (req, res) => {
    conectionBCT.query("select * from usuarios", (error, result) => {
      if (error) return res.send(localUsers);
      return res.send(result);
    });
  },

  // -------  traer solo 1 usuario ---------
  getUser: (req, res) => {
    let id = req.params.id;

    conectionBCT.query(
      `select * from usuarios where id="${id}" `,
      (error, result) => {
        if (error) {
          let userLocal = localUsers.find((User) => User.id == id);
          return res.send(userLocal);
        }
        return res.send(result);
      }
    );
  },

  // ------- crear usuario ---------
  createUser: (req, res) => {
    let localNewUser = {
      name: req.body.name,
      age: req.body.age,
      salary: req.body.salary,
      id: localUsers.length + 1,
    };

    conectionBCT.query(
      `INSERT INTO usuarios(nombre, edad, sueldo) VALUES("${localNewUser.name}","${localNewUser.age}","${localNewUser.salary}") `,
      (err, result) => {
        if (err) {
          localUsers.push(localNewUser);
          return res.send({
            message: `Se creo usuario ${localNewUser.name} exitosamente`,
          });
        }

        return res.send({
          message: `Se creo usuario ${localNewUser.name} exitosamente`,
        });
      }
    );
  },
  // -------  actualizar usuario ---------
  updateUser: (req, res) => {
    let userParam = {
      name: req.body.name,
      age: req.body.age,
      salary: req.body.salary,
      id: req.body.id,
    };

    conectionBCT.query(
      `UPDATE  usuarios SET nombre="${userParam.name}", edad="${userParam.age}", sueldo="${userParam.salary}" where id="${userParam.id}" `,
      (error, result) => {
        if (error) {
          localUsers.splice(userParam.id - 1, 1); //elimina el objeto con el id mandamos por la req -1 para que coincida con el indice del array.
          localUsers.push(userParam); // agregamos el nuevo objeto con los datos modificados que llega por la req
          localUsers.sort(function (a, b) {
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1; // ordena el array por el id de caja objeto
            return 0;
          });

          return res.send({
            message: `Se actualizo ${userParam.name} exitosamente `,
          });
        }
        return res.send({
          message: `Se actualizo ${userParam.name} exitosamente `,
        });
      }
    );
  },

  // -------  eliminar usuario ---------
  deleteUser: (req, res) => {
    // recibimos el id por el url y lo capturamos usarndo el req.params
    let id = req.params.id;

    conectionBCT.query(
      `DELETE FROM usuarios WHERE id="${id}" `,
      (error, result) => {
        if (error) {
          localUsers.splice(id - 1, 1);

          return res.send({ message: "se elimino el usuario correctamente" });
        }
        return res.send({ message: "se elimino el usuario correctamente" });
      }
    );
  },

  // -------------------------------------------------  productos  ------------------------------------------------------

  // En caso de error en la conexion con la base de datos usamoe el Array local como base de datos fictisia

  // -------  traer producto ---------

  getAllProducts: (req, res) => {
    conectionBCT.query("select * from producto", (error, result) => {
      if (error) {
        return res.send(localProducts);
      }
      return res.send(result);
    });
  },

  // ------ crear producto --------

  createProduct: (req, res) => {
    let reqProduct = {
      name: req.body.name,
      creator: req.body.creator,
      id: localProducts.length + 1,
    };

    conectionBCT.query(
      `INSERT INTO producto(nombre, creador) VALUES("${reqProduct.name}", "${reqProduct.creator}")`,
      (error, result) => {
        if (error) {
          localProducts.push(reqProduct);
          return res.send({
            message: ` Se creo producto con exito ${reqProduct.name}`,
          });
        }

        return res.send(` Se creo producto con exito ${reqProduct.name}`);
      }
    );
  },

  //  ------ actualizar producto --------

  updateProduct: (req, res) => {
    let reqProduct = {
      name: req.body.name,
      creator: req.body.creator,
      id: req.body.id,
    };

    conectionBCT.query(
      `UPDATE producto SET  nombre="${reqProduct.name}", creador="${reqProduct.creator}"  where id="${reqProduct.id}" `,
      (error, result) => {
        if (error) {
          localProducts.splice(reqProduct.id - 1, 1);
          localProducts.push(reqProduct);
          localProducts.sort((a, b) => {
            return a.id - b.id;
          });
          return res.send({
            message: `se actualizo producto con exito a ${reqProduct.name}`,
          });
        }

        return res.send({
          message: `se actualizo producto con exito a ${reqProduct.name}`,
        });
      }
    );
  },

  //  ------- Eliminar  producto -----
  // definimos la ruta para la captura del id usando /:id
  deleteProduct: (req, res) => {
    // recibimos el id por el url y lo capturamos usarndo el req.params
    let id = req.params.id;

    conectionBCT.query(
      `DELETE FROM producto WHERE id= "${id}" `,
      (error, result) => {
        if (error) {
          localProducts.splice(id - 1, 1);
          return res.send({
            message: "el producto  se elimino de manera exitosa",
          });
        }

        return res.send({
          message: "el producto  se elimino de manera exitosa",
        });
      }
    );
  },
};

module.exports = controlador;
