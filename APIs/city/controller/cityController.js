const db = require("../../../index");
const Sequelize = require("sequelize");
const tbl_City_details = db.tbl_City_details;
const tbl_State_details = db.tbl_State_details;
const tbl_Country_details = db.tbl_Country_details;
//============= ==============//

exports.createcity_Details = async (req, res) => {
  try {
    if (req.body.city_Name) {
      const { city_Name, state_Id, country_Id } = req.body;
      const createData = await tbl_City_details.create({
        city_Name,
        country_Id,
        state_Id,
      });
      return res.status(200).send({
        code: 200,
        message: "City Details Created Successfully",
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

exports.getCity = async (req, res) => {
    try {
      const cityId = req.params.city_Id;
      const data = await tbl_City_details.findOne({
        include: [
          { model: tbl_Country_details, attributes: ["country_Name"] },
          { model: tbl_State_details, attributes: ["state_Name"] }
        ],
        where: {
          city_Id: cityId,
        },
      });
      return res.status(200).send({ code: 200, message: data });
    } catch (error) {
      console.log("Error", error);
      return res
        .status(500)
        .send({ code: 500, message: error.message || "Server Error" });
    }
  };
  
