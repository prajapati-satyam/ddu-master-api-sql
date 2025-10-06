const express = require("express");
const {sem4,sem5,sem5_admin, central, batch_2024_25, tj_patel, charusat} = require("../controller/find_controller");
const admin_middleware = require('../middleware/admin_middleware')
const router = express.Router();


router.get('/find/sem4/:rollNumber', sem4);
router.get('/find/sem5/:rollNumber', sem5);
router.post('/admin/find/sem5/:rollNumber', admin_middleware,sem5_admin);
router.post('/admin/find/central', admin_middleware,central);
router.post('/admin/find/batch-2024-25', admin_middleware,batch_2024_25);
router.post('/find/tjpatel', tj_patel);
router.post('/find/charusat/:roll_no', charusat);


module.exports = router