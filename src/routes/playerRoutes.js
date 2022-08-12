const express = require('express')
const playerController = require('../controllers/playerController')
const validator = require('express-joi-validation').createValidator({})
const schemaPlayer = require('../validations/playerBodyValidatior')

const router = (Player) => {
  const playerRouter = express.Router()

  const { getAllPlayer, getPlayerById, postPlayer, putPlayerById,deletePlayerById} =
    playerController(Player)

  playerRouter
    .route('/player')
    .get(getAllPlayer)
    .post(validator.body(schemaPlayer), postPlayer)

  playerRouter
    .route('/player/:id')
    .get(getPlayerById)
    .put(validator.body(schemaPlayer), putPlayerById)
    .delete(deletePlayerById);

  return playerRouter
}

module.exports = router
