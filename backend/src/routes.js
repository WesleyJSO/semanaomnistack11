const express = require(`express`)

const OngController = require(`./controllers/OngController`)
const IncidentController = require(`./controllers/IncidentController`)
const ProfileController = require(`./controllers/ProfileController`)
const SessionController = require(`./controllers/SessionController`)

const OngsValidation = require(`./validations/OngsValidation`)
const ProfileValidation = require(`./validations/ProfileValidation`)
const IncidentValidation = require(`./validations/IncidentValidation`)
const SessionValidation = require(`./validations/SessionValidation`)

const routes = express.Router()

routes.post(`/sessions`, SessionValidation.post(), SessionController.create)

routes.get(`/ongs`, OngController.index)
routes.post(`/ongs`, OngsValidation.post(), OngController.create)

routes.get(`/incidents`, IncidentValidation.get(), IncidentController.index)
routes.post(`/incidents`, IncidentValidation.post(), IncidentController.create)
routes.delete(`/incidents/:id`, IncidentValidation.delete(), IncidentController.delete)

routes.get(`/profile`, ProfileValidation.get(), ProfileController.index)

module.exports = routes