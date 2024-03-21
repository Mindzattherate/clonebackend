const countrycontroller = require("../controller/countrycontroller");

module.exports = app => {
    app.post("/api/v1/createCountryDetails", countrycontroller.createCountry_Details);
}