const jwt = require("jsonwebtoken");
const authModel = require("../model/auth.model");
const response = require("../../../response");
const bcrypt = require("bcryptjs");
// const crypto = require("../../../crypto");


const verify = require("../../../middleware/verify.token");





var data;

exports.signup = async (req, res) => {
  try {
    const user = await authModel.findOne({ email: req.body.email });
    if (user) {
      data = { message: "User with that email already exists." };
      response.validation_error_message(data, res);
    } else {
      const hashedPassword = bcrypt.hashSync(req.body.password, 8);
      const newUser = await authModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        created_at: new Date().toISOString(),
      });
      data = { message: "Registration successful.", auth: true };
      response.success_message(data, res);
    }
  } catch (err) {
    data = { message: err.message };
    response.error_message(data, res);
  }
};

exports.login = async (req, res) => {
  try {
    
    const user = await authModel.findOne({ email: req.body.email });
    if (!user) {
      data = { message: "Email is incorrect." };
      response.validation_error_message(data, res);
    }  else {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        data = { message: "Password is incorrect." };
        response.validation_error_message(data, res);
      } else {

        
        profileDetails = await authModel
          .findOne({ _id: user._id })
          .select("firstName lastName")
          .lean();

         

        if (profileDetails == null) {
          profileDetails = {
            firstName: "",
            lastName:""
         
          };
        }
       
        const token = jwt.sign(
          {
            id: user._id,
            role: user.role,
            email: req.body.email,
            password: req.body.password
          },
          process.env.JWTSECRET,
          {
            expiresIn: "24h", // expires in 24 hours
          }
        );


 
        data = {
            profileDetails: profileDetails,
            token: token,
          };

          response.success_message(data, res);
        
      
      }}
  } catch (err) {
    data = { message: err.message };
    response.error_message(data, res);
  }
}; 






