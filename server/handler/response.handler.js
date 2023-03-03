const responseWithMessage = (res, status, message) => res.status(status).send(message)

const error = (res) => responseWithMessage(res, 500, {
    message:'Internal server Error'
})

const ok = (res, message) => responseWithMessage(res, 200, message)

const created = (res, message) => responseWithMessage(res, 201, message)

const badRequest = (res, message) => responseWithMessage(res, 400, message)

const unauthorised = (res) => responseWithMessage(res, 401, {
    status: 401,
    message:'Unauthorised'
})

const notFound = (res, message) => responseWithMessage(res, 404, {
    status: 404,
    message:'not found'
})

module.exports = {
    ok,
    created,
    badRequest,
    unauthorised,
    notFound,
    error
}