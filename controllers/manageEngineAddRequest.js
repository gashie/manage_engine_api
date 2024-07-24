const http = require("../utils/services/axiosConnector")
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var FormData = require('form-data');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

exports.addRequest = async (req, res, next) => {
    const subject = req.body.subject;
    const description = req.body.description;
    const requester = req.body.requester;
    const urgency = req.body.urgency;
    const group = req.body.group;
    const impact = req.body.impact;
     const service_category = req.body.service_category;

    var data = new FormData();
  try {
    data.append('input_data', JSON.stringify({'request': {'subject': `${subject}`,"description": `${description}`,"requester": {"name": `${requester}`}, "urgency": {"name":`${urgency}`},"group": {"name":`${group}`},"impact": {"name":`${impact}`},"service_category": {"name":`${service_category}`}}}));
    var {data} = await http.post(process.env.meurl,data,{ headers: { 
      'TECHNICIAN_KEY': process.env.TECHNICIAN_KEY, 
      ...data.getHeaders()
    }});
    res.json({mestatus:data.response_status, ticketID: data.request.id})
  } catch (error) {
    console.log(error.response.data);
    console.log(error);
    res.json(error.response.data)
  }

  }