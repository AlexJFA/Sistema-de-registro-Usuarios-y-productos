const express = require("express");
const controlador = require("./controlador");
const controladorJWT = require("./controladorJWT");
const router = express.Router();

// ------------------------------------------------- JWT -----------------------------------------------------

router.post("/users/login", controladorJWT.createToken);

router.post("/users/Authorization", controladorJWT.authorization);

// ------------------------------------------------- Usuarios------------------------------------------------------

// -------  traer usuarios -------

router.get("/users", controlador.getAllUsers);
// router.get("/users", controladorJWT.authorization, controlador.getAllUsers);

// ----- traer solo 1 usuario ------

router.get("/users/:id", controlador.getUser);

// --------- crear usuario ----------

router.post("/users", controlador.createUser);

// -------- actualizar usuario ----------

router.put("/users/:id?", controlador.updateUser);

// ----   Eliminar  usuario -------

// definimos la ruta para la captura del id usando /:id
router.delete("/users/:id", controlador.deleteUser);

// -------------------------------------------------  productos  ------------------------------------------------------

// -------  traer productos ---------

router.get("/products", controlador.getAllProducts);

// ------ crear producto --------

router.post("/products", controlador.createProduct);

//  ------ actualizar producto --------

router.put("/products/:id?", controlador.updateProduct);

//  ------- Eliminar  producto -----
// definimos la ruta para la captura del id usando /:id
router.delete("/products/:id?", controlador.deleteProduct);

module.exports = router;
