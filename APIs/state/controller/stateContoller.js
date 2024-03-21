const db = require("../../../index");
const Sequelize = require("sequelize");
const tbl_State_details = db.tbl_State_details;
//============= ==============//

exports.createstate_Details = async (req, res) => {
  try {
    if (req.body.state_Name) {
      const { state_Name , country_Id} = req.body;
      const createData = await tbl_State_details.create({
        state_Name,
        country_Id
      });
      return res
        .status(200)
        .send({
          code: 200,
          message: "State Details Created Successfully",
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
