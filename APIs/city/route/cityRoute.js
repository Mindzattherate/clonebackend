const cityContoller = require("../controller/cityController");

module.exports = app => {
    app.post("/api/v1/createCityDetails", cityContoller.createcity_Details);
    app.get("/api/v1/getCity/:city_Id", cityContoller.getCity);
}