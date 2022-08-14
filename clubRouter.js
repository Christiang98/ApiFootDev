const express = require('express')
const clubController = require('../controllers/clubController')
const validator = require('express-joi-validation').createValidator({})
const bodySchema = require('../validations/clubBodyValidator')

const router = (Club) => {
  const clubRouter = express.Router()

  const { getAllClub, getClubById, postClub, putClubById, deleteClubById } =
    clubController(Club)

  clubRouter
    .route('/club')
    .get(getAllClub)
    .post(validator.body(bodySchema), postClub)

  clubRouter
    .route('/club/:id')
    .get(getClubById)
    .put(validator.body(bodySchema), putClubById)
    .delete(deleteClubById)

  return clubRouter
}

module.exports = router
