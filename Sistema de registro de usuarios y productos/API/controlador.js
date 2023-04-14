
const conectionBCT = require("./conectionBCT");


// ------------------------------------------------- usuarios ------------------------------------------------------

const controlador = {
  getAllUsers: (req, res) => {
    // -------  traer usuarios -------

    conectionBCT.query("select * from usuarios", (error, result) => {
      if (error) return res.send(" ocurrio un error", error);
      return res.send(result);
    });
  },

  getUser: (req, res) => {
    // ----- traer solo 1 usuario ------
    let id = req.body.id;

    conectionBCT.query(
      `select * from usuarios where id="${id}" `,
      (error, result) => {
        if (error) return res.send(" ocurrio un error", error);
        return res.send(result);
      }
    );
  },

  createUser: (req, res) => {
    // --------- crear usuario ----------

    let name = req.body.name;
    let age = req.body.age;
    let salary = req.body.salary;

    conectionBCT.query(
      `INSERT INTO usuarios(nombre, edad, sueldo) VALUES("${name}","${age}","${salary}") `,
      (err, result) => {
        if (err) return res.send(err);

        return res.send(`Se creo usuario ${name} exitosamente`);
      }
    );
  },

  updateUser: (req, res) => {
    // -------- actualizar usuario ----------
    let name = req.body.name;
    let age = req.body.age;
    let salary = req.body.salary;
    let id = req.body.id;

    conectionBCT.query(
      `UPDATE  usuarios SET nombre="${name}", edad="${age}", sueldo="${salary}" where id="${id}" `,
      (error, result) => {
        if (error) return res.send("ocurrio un error");
        return res.send(`Se creo actualizo ${name} exitosamente `);
      }
    );
  },

  deleteUser: (req, res) => {
    // ----   Eliminar  usuario -------
    // recibimos el id por el url y lo capturamos usarndo el req.params
    let id = req.params.id;

    conectionBCT.query(
      `DELETE FROM usuarios WHERE id="${id}" `,
      (error, result) => {
        if (error) return res.send("ocurrio un error");

        return res.send("se elimino el usuario correctamente");
      }
    );
  },

  // -------------------------------------------------  productos  ------------------------------------------------------

  // -------  traer producto ---------

  getAllProducts: (req, res) => {
    conectionBCT.query("select * from producto", (error, result) => {
      if (error) return res.send(error);
      return res.send(result);
    });
  },

  // ------ crear producto --------

  createProduct: (req, res) => {
    let name = req.body.name;
    let creator = req.body.creator;

    conectionBCT.query(
      `INSERT INTO producto(nombre, creador) VALUES("${name}", "${creator}")`,
      (error, result) => {
        if (error) return res.send("ocurrio un error");

        return res.send(` Se creo producto con exito ${name}`);
      }
    );
  },

  //  ------ actualizar producto --------

  updateProduct: (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let creator = req.body.creator;

    conectionBCT.query(
      `UPDATE producto SET  nombre="${name}", creador="${creator}"  where id="${id}" `,
      (error, result) => {
        if (error) return res.send("ocurrio un error" + " " + error);

        return res.send(`se actualizo producto con exito a ${name}`);
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
        if (error) return res.send("ocurrio un error");

        return res.send("el producto  se elmino de manera exitosa");
      }
    );
  },
};

module.exports = controlador;
