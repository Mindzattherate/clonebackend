module.exports = (sequelize, Sequelize) => {
    const tbl_Country_details = sequelize.define("tbl_Country_details", {
        country_Id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country_Name: {
            type : Sequelize.STRING
        },

    });
    return tbl_Country_details;
}