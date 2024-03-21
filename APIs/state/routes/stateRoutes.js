const stateContoller = require("../controller/stateContoller");

module.exports = app => {
    app.post("/api/v1/createStateDetails", stateContoller.createstate_Details);
}