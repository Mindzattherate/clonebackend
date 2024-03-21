module.exports = (sequelize, Sequelize) => {
    const tbl_City_details = sequelize.define("tbl_City_details", {
        city_Id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country_Id: {
            type : Sequelize.INTEGER
        },
        state_Id: {
            type : Sequelize.INTEGER
        },
        city_Name: {
            type : Sequelize.STRING
        },

    });
    return tbl_City_details;
}