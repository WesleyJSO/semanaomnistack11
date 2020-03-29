const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  get() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required().min(1)
      })
    })
  },

  post() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        value: Joi.number().required(),
        description: Joi.string().required().min(10).max(150),
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
  },

  delete() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().min(1)
      })
    })
  }
}