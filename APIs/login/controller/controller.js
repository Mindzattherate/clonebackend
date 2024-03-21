const db = require('../../../index');
const Sequelize = require('sequelize')
const tbl_patientDetails = db.tbl_patientDetails
// const tbl_assetCategories = db.tbl_assetCategories;
// const tbl_assetSubCategory = db.tbl_assetSubCategory;
// const company = db.company;

//============= Create Asset Category ==============//

exports.createPatient_Details = async (req, res) => {
    try {
        const {
            patient_Name,
            patient_Age,
            medical_Issue,
            medical_History,
            state,
            phone_Number,
            email
        } = req.body
        const createData = await tbl_patientDetails.create({
            patient_Name,
            patient_Age,
            medical_Issue,
            medical_History,
            state,
            phone_Number,
            email
        })
        return res.status(200).send({ code: 200, message: "Patient Details Create Successfully", data: createData })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send({ code: 500, message: error.message || "Server Error" })
    }
}

exports.create_User = async (req, res) => {
    try {
        const {
            user_name,
            email_id,
            phone_Number,
            password,
        } = req.body
        const createData = await tbl_.create({
            user_name,
            email_id,
            phone_Number,
            password,
        })
        return res.status(200).send({ code: 200, message: "User Created Successfully", data: createData })
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send({ code: 500, message: error.message || "Server Error" })
    }
}