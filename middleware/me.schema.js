const {
    addRequest,
    checkClient,
    mfaNotify,
    getRequest
   } = require('../validation/me.schema');
   
   module.exports = {
     addrequest: async (req, res, next) => {
       const value = await addRequest.validate(req.body);
       if (value.error) {
         res.status(400).json({
           success: 0,
           message: value.error.details[0].message,
         });
       } else {
         next();
       }
     },
     getrequest: async (req, res, next) => {
      const value = await getRequest.validate(req.body);
      if (value.error) {
        res.status(400).json({
          success: 0,
          message: value.error.details[0].message,
        });
      } else {
        next();
      }
    },
     checkclientapp: async (req, res, next) => {
       const value = await checkClient.validate(req.body);
       if (value.error) {
         res.status(400).json({
           success: 0,
           message: value.error.details[0].message,
         });
       } else {
         next();
       }
     },
      mfaNotification: async (req, res, next) => {
       const value = await mfaNotify.validate(req.body);
       if (value.error) {
         res.status(400).json({
           success: 0,
           message: value.error.details[0].message,
         });
       } else {
         next();
       }
     },
   
   
    
   };
   