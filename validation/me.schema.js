const Joi = require('@hapi/joi');

const schema = {
 
  addRequest: Joi.object({
    subject: Joi.string().required().label('Subject'),
    description: Joi.string().required().label('Description'),
    requester: Joi.string().required().label('Requester'),
    urgency: Joi.string().valid('High','Low','Normal').required().min(3).label('Urgency'),
    group: Joi.string().valid('Digital Solutions','Automation and Development', 'Network', 'Enterprise','Core Banking','Central Cash Management','Central Clearing Unit','Central Client Service','Central Swift & Payment Unit','Service Delivery','Technology Services Unit','IT Governance','Financial Inclusion','Information Security').required().label('Group'),
    impact: Joi.string().valid('High','Low').required().min(3).label('Impact'),
    service_category: Joi.string().valid('Application','Hardware','Informational','Networking','Security','Data Management','Repairs','Files & Print Services','Syslogger').required().label('Service Category')
    }),
   checkClient: Joi.object({
    client_id: Joi.string().min(15).required().label('ClientID'),
    clientsecret: Joi.number().min(10).required().label('Secret'),
   }),
   mfaNotify: Joi.object({
    username: Joi.string().required().label('Username'),
   }),
   getRequest: Joi.object({

    ticketID: Joi.number().required().label('TicketID'),
   }),

 

};

module.exports = schema;
