const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  post() {
    return celebrate({
      [Segments.BODY]: Joi.object({
        id: Joi.string().required().length(8)
      }).unknown()
    })
  }
}