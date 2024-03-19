const express = require("express");
const path = require("path");
const cors = require("cors");
const http = require("http");
const bodyparse = require('body-parser');
const dotenv = require("dotenv");
const db = require("./index");
const sequelize = require("sequelize");
//=========== GD Sync ============//

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db success...");
  })
  .catch((err) => {
    console.log("Failed to sync db...", err.message);
  });
// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db success...");
//   }).catch((err) => {
//     console.log("Failed to sync db...", err.message)
//   });


var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the EM Procurement Back-End!" });
  });

app.use(express.static("public"));


const corsOpts = {
    origin: "*",
    methods: ["GET", "PATCH", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  };
  app.use(cors(corsOpts));


//================= Router ==================//


require('./APIs/login/route/route')(app);

//================== Server ==================//

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

