const loginController = require("../controller/controller");

module.exports = app => {
    app.post("/api/v1/createAssetCategory", loginController.createPatient_Details);
}