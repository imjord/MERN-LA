const router = require('express').Router();
const { getMenu } = require('../../controllers/MenuController');



router.get('/menu', getMenu);


module.exports = router;