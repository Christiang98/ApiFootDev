const { query } = require('express')
const httpStatus = require('../helpers/httpStatus')

const playerController = (Player) => {
    const getAllPlayer = async (req, res, next) => {
        try {
            const { query } = req

            const response = await Player.find(query)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const postPlayer = async (req, res, next) => {
        try {
            const { body } = req

            const player = await new Player(body)

            await player.save()

            return res.status(httpStatus.CREATED).json(player)
        } catch (err) {
            next(err)
        }
    }

    const putPlayerById = async (req, res, next) => {
        try {
            const { body, params } = req

            const checkData = await Player.find({
                _id: params.id
            })

            if (checkData === null) {
                return res
                    .status(httpStatus.FORBIDDEN)
                    .send('No data found with the provided ID.')
            }



            await Player.updateOne(
                {
                    _id: params.id
                },
                {
                    $set: {
                        firstName: body.firstName,
                        lastName: body.lastName,
                        global: body.global,
                        nationality: body.nationality,
                        team: body.team,
                    }
                }
            )

            return res.status(httpStatus.CREATED).send('Data successful updated')
        } catch (err) {
            next(err)
        }
    }

    const getPlayerById = async (req, res, next) => {
        try {
            const { params } = req

            const response = await Player.findById(params.id)

            return res.status(httpStatus.OK).json(response)
        } catch (err) {
            next(err)
        }
    }

    const deletePlayerById = async (req, res, next) => {
        try {
            const { params } = req

            await Player.findByIdAndDelete(params.id)

            return res.status(httpStatus.OK).send('Data successful deleted')
        } catch (err) {
            next(err)
        }
    }

    return {
        getAllPlayer,
        getPlayerById,
        postPlayer,
        putPlayerById,
        deletePlayerById
    }
}

module.exports = playerController