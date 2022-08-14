const httpStatus = require('../helpers/httpStatus')

const myClubController = (MyClub) => {
  const getAllMyClub = async (req, res, next) => {
    try {
      const { query } = req

      const response = await MyClub.find(query)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const postMyClub = async (req, res, next) => {
    try {
      const { body } = req
 
      const myClubData = {
        ...body,
      }

      const myClub = await new MyClub(myClubData)

      await myClub.save()

      return res.status(httpStatus.CREATED).json(myClub)
    } catch (err) {
      next(err)
    }
  }

  const putMyClubById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await MyClub.find({
        _id: params.id
      })

      if (checkData === null) {
        return res
          .status(httpStatus.FORBIDDEN)
          .send('No data found with the provided ID.')
      }

      await MyClub.updateOne(
        {
          _id: params.id
        },
        {
          $set: {
            name: body.name,
            technicalDirector: body.technicalDirector,
            stadium: body.stadium,
            alinement: body.alinement,
            player1: body.player1,
            player2: body.player2,
            player3: body.player3,
            player4: body.player4,
            player5: body.player5,
          }
        }
      )

      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }

  const getMyClubById = async (req, res, next) => {
    try {
      const { params } = req

      const response = await MyClub.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteMyClubById = async (req, res, next) => {
    try {
      const { params } = req

      await MyClub.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).send('Data successful deleted')
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllMyClub,
    getMyClubById,
    postMyClub,
    putMyClubById,
    deleteMyClubById
  }
}

module.exports = myClubController
