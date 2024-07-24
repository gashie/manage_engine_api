const http = require("../utils/services/axiosConnector")
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var FormData = require('form-data');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

exports.getTicket = async (req, res, next) => {
    const id = req.body.ticketID;

    var data = new FormData();
  try {
    var {data} = await http.get(`${process.env.url}/${id}?TECHNICIAN_KEY=${process.env.TECHNICIAN_KEY}`);
    const subject = data.request.subject
    const assigned_time = data.request.assigned_time
    const last_updated_time = data.request.last_updated_time
    const status = data.request.status
    const technician  = data.request.technician
    // res.json({mestatus:data.response_status,status,subject,assigned_time,last_updated_time,technician})
    res.json(data?.request)
  } catch (error) {
    console.log(error.response.data);
    console.log(error);
    res.json(error.response.data)
  }

  }