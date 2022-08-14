const httpStatus = require('../helpers/httpStatus')

const clubController = (Club) => {
  const getAllClub = async (req, res, next) => {
    try {
      const { query } = req

      const response = await Club.find(query)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const postClub = async (req, res, next) => {
    try {
      const { body } = req
 
      const clubData = {
        ...body,
      }

      const club = await new Club(clubData)

      await club.save()

      return res.status(httpStatus.CREATED).json(club)
    } catch (err) {
      next(err)
    }
  }

  const putClubById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await Club.find({
        _id: params.id
      })

      if (checkData === null) {
        return res
          .status(httpStatus.FORBIDDEN)
          .send('No data found with the provided ID.')
      }

      await Club.updateOne(
        {
          _id: params.id
        },
        {
          $set: {
            name: body.name,
            league: body.league,
            technicalDirector: body.technicalDirector,
            stadium: body.stadium,
            alinement: body.alinement
          }
        }
      )

      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }

  const getClubById = async (req, res, next) => {
    try {
      const { params } = req

      const response = await Club.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteClubById = async (req, res, next) => {
    try {
      const { params } = req

      await Club.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).send('Data successful deleted')
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllClub,
    getClubById,
    postClub,
    putClubById,
    deleteClubById
  }
}

module.exports = clubController
