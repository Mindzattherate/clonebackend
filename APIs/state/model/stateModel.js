module.exports = (sequelize, Sequelize) => {
    const tbl_State_details = sequelize.define("tbl_State_details", {
        state_Id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country_Id: {
            type: Sequelize.INTEGER,
        },
        state_Name: {
            type : Sequelize.STRING
        },

    });
    return tbl_State_details;
}