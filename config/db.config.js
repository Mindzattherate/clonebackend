module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "mindz",
    DB: "rhythm",
    dialect: "mysql",
    logging: false,
    camelCase: true, 
    additional: {
        timestamps: false
    },
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }