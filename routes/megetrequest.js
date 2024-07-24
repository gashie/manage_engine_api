const express = require('express');

const router = express.Router();

const {
  getTicket
} = require('../controllers/getRequest');
const { getrequest } = require('../middleware/me.schema');
//routes
router
  .route('/')
  .post(getrequest, getTicket);

module.exports = router;
