module.exports = (sequelize, Sequelize) => {
    const tbl_patientDetails = sequelize.define("tbl_patientDetails", {
        patient_Id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        patient_Name: {
            type : Sequelize.STRING
        },
        patient_Age: {
            type : Sequelize.INTEGER
        },
        medical_Issue: {
            type: Sequelize.STRING
        },
        medical_History: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        phone_Number: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });
    return tbl_patientDetails;
}