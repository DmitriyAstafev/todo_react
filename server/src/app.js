require("dotenv").config();

const express = require("express");
const router = require("./routes/index");
const cors = require("cors");

const { sequelize } = require("../db/models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env || 5000;

app.use("/api/v1", router);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Соединение с базой установлено!");
  } catch (err) {
    console.log(err, "Error!");
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
