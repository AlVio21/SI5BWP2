var express = require('express');
var router = express.Router();

const BukuController = require("../../controller/buku");
const checkAuth = require('../middleware/check-auth');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari BUKU router');
// });

//insert
router.post('/', checkAuth,BukuController.createBuku);

//select
router.get("/", checkAuth,BukuController.readBuku);

//delete
router.delete('/:id', checkAuth,BukuController.deleteBuku);

//update
router.put('/:id', checkAuth,BukuController.updateBuku);

module.exports = router;
