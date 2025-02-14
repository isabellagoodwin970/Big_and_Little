
const express = require('express')
const router = express.Router();
const orgController = require('../controllers/orgController');
//i'm not sure what path i'm supposed to use here
router.route('/userOrgs')
    .post(orgController.registerOrganization);
module.exports = router;

