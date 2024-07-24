const express = require('express');

const router = express.Router();

const {
  addRequest
} = require('../controllers/manageEngineAddRequest');
const { addrequest,checkclientapp } = require('../middleware/me.schema');
//routes
router
  .route('/')
  .post(addrequest, addRequest);

module.exports = router;
