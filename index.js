const config = require("./config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//======================= Models ========================//

db.tbl_patientDetails = require('./APIs/login/model/model')(sequelize, Sequelize);

db.tbl_Country_details = require('./APIs/country/model/countrymodel')(sequelize, Sequelize);

db.tbl_State_details = require('./APIs/state/model/stateModel')(sequelize, Sequelize);

db.tbl_City_details = require('./APIs/city/model/cityModel')(sequelize, Sequelize);

//======================= Relations ========================//

db.tbl_State_details.hasMany(db.tbl_Country_details, {
  throgh: "tbl_Country_details",
  foreignKey: "country_Id"
});
db.tbl_Country_details.hasMany(db.tbl_State_details, {
  throgh: "tbl_State_details",
  foreignKey: "country_Id"
});

//*****************************************************//

db.tbl_City_details.belongsTo(db.tbl_State_details, {
  throgh: "tbl_State_details",
  foreignKey: "state_Id"
});

db.tbl_State_details.hasMany(db.tbl_City_details, {
  throgh: "tbl_City_details",
  foreignKey: "state_Id"
});

//*****************************************************//

db.tbl_City_details.belongsTo(db.tbl_Country_details, {
  throgh: "tbl_Country_details",
  foreignKey: "country_Id"
});


db.tbl_Country_details.hasMany(db.tbl_City_details, {
  throgh: "tbl_City_details",
  foreignKey: "country_Id"
});

//***************************************************//
module.exports = db
