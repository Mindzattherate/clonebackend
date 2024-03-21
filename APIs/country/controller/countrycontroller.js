const db = require("../../../index");
const Sequelize = require("sequelize");
const tbl_Country_details = db.tbl_Country_details;
//============= ==============//

exports.createCountry_Details = async (req, res) => {
  try {
    if (req.body.country_Name) {
      const { country_Name } = req.body;
      const createData = await tbl_Country_details.create({
        country_Name,
      });
      return res
        .status(200)
        .send({
          code: 200,
          message: "Country Details Created Successfully",
          data: createData,
        });
    } else {
        return res
      .status(400)
      .send({ code: 500, message: "Name field is not be null" });
    }
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};
