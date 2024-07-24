const dotenv = require('dotenv');
const http = require("../utils/services/axiosConnector")
dotenv.config({ path: './config/config.env' });
module.exports = {
  checkOAuth: async(req, res, next) => {
    {

      try {
        let client_id = req.headers['client_id'];
        let secret = req.headers['clientsecret'];
        if (!client_id && !secret) {
         return res.status(401).json({ message: "No token, authorization denied" });
       }
        var body = JSON.stringify({"client_id": client_id, "clientsecret": secret});
  
        var {data} = await http.post(process.env.oauthurl,body,{headers: {
          'Content-Type': 'application/json'
      }});
      if(data.success === true){
        return next()
       
      }
      } catch (error) {
       res.status(500).json({message:error.response.data.message})
      }
    
  }
  },
 
};
