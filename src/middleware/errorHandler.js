const httpStatus=require("../helpers/httpStatus")

const ERROR_HANDLERS = {
    MongoServerError: (res, err) =>
        res.status(httpStatus.BAD_REQUEST).send({ error: err.name, cause: err.message ,menssage:"Datos repetidos en la base de datos"}),

    defaultError: (res, err) =>
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: err.name, cause: err.message })
}

const errorHandler = (err, req, res, next) => {
    const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
    handler(res, req)
}

module.exports = errorHandler
