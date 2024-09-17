import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid(
    'development',
    'production',
    'test',
    'provision',
  ),
  ACCESS_TOKEN_SECRET: Joi.string().required(),
  ACCESS_TOKEN_EXPIRES_IN: Joi.string().required(),
  REFRESH_TOKEN_SECRET: Joi.string().required(),
  REFRESH_TOKEN_EXPIRES_IN: Joi.string().required(),
  PORT: Joi.number().default(3000),
});