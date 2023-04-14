const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./router");

// -----------------------------------------------------------------------------------------------------------------------------------
// este midelware evalua el cuerpo(body) que llega  por la url
// app.use(urlencoded({ extended: false }));
app.use(urlencoded());
app.use(express.json());
app.use(express.text());
app.use(cors());
// app.use(bodyParser())

// -----------------------------------------------------------------------------------------------------------------------------------
//   levantamos el servidor nodeJs
app.listen(port, () => {
  console.log("El servidor  listo y corriendo el el puerto 3000");
});

app.use("/", router);
