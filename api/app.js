const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
