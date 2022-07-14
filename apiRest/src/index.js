const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/users.routes");
require("dotenv").config();

//Init Express
const app = express();

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(routes);

//Init Server
app.listen(3000);
console.log("Ejecutando en el puerto 3000");
