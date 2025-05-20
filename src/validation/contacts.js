import Joi from 'joi';

const baseContactFields = {
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must have at least {#limit} characters',
    'string.max': 'Name must have at most {#limit} characters',
    'any.required': 'Name is required',
  }),

  phoneNumber: Joi.string().messages({
    'string.base': 'Phone number must be a string',
    'any.required': 'Phone number is required',
  }),

  email: Joi.string().email().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Email must be valid',
  }),

  isFavourite: Joi.boolean().messages({
    'boolean.base': 'Is favourite must be a boolean (true or false)',
  }),

  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'Contact type must be a string',
    'any.only': 'Contact type must be one of [work, home, personal]',
  }),
};

export const createContactSchema = Joi.object(baseContactFields).fork(
  ['name', 'phoneNumber'],
  (schema) => schema.required(),
);

export const updateContactSchema = Joi.object(baseContactFields);

// phoneNumber: Joi.string()
// .pattern(/^\+?[0-9\s\-()]{10,20}$/) так проще
