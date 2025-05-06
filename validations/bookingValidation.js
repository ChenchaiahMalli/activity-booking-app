const Joi = require('joi');

const bookingValidation = (data) => {
  const schema = Joi.object({
    activity_id: Joi.number().integer().required()
  });

  return schema.validate(data);
};

module.exports = { bookingValidation };