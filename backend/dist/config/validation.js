"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("joi");
exports.validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision'),
    ACCESS_TOKEN_SECRET: Joi.string().required(),
    ACCESS_TOKEN_EXPIRES_IN: Joi.string().required(),
    REFRESH_TOKEN_SECRET: Joi.string().required(),
    REFRESH_TOKEN_EXPIRES_IN: Joi.string().required(),
    PORT: Joi.number().default(3000),
});
//# sourceMappingURL=validation.js.map