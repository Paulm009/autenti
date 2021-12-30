const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8081;

// Routers
const usersRouter = require("./routers/users");

// Intermediario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", usersRouter);

// Server
app.listen(port, () => console.log(`App abierta en http://localhost:${port}`));
