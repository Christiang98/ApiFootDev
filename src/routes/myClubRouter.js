const express = require('express')
const myClubController = require('../controllers/myClubController')
const validator = require('express-joi-validation').createValidator({})
const bodySchema = require('../validations/myClubBodyValidator')

const router = (MyClub) => {
  const myClubRouter = express.Router()
  const { getAllMyClub, getMyClubById, postMyClub, putMyClubById, deleteMyClubById } =
    myClubController(MyClub)

  myClubRouter
    .route('/myclub')
    .get(getAllMyClub)
    .post(validator.body(bodySchema),postMyClub)

  myClubRouter
    .route('/myclub/:id')
    .get(getMyClubById)
    .put(validator.body(bodySchema), putMyClubById)
    .delete(deleteMyClubById)

  return myClubRouter
}

module.exports = router
