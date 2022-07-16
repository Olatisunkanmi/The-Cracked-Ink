const express = require('express');
const router = express.Router();

router.post('/', async (req, res ) => {
  
    const mailchimpTx = require("mailchimp_transactional")("70f6f16f5f0cdad21d6fcc779eb6f1bf-us9");

  const response = await mailchimpTx.users.ping();
  console.log(response);
  console.log('first')

})

module.exports = router;