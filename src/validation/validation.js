import Joi from "joi";

export const CoursePostSchema = Joi.object({
    title: Joi.string().required().max(64),
    price: Joi.number().required(),
}).required();

export const LoginPostSchema = Joi.object({
    username: Joi.string().required().max(64),
    password: Joi.string().required(),
    role: Joi.string(),
}).required();

export const CoursePutSchema = Joi.object({
    title: Joi.string().max(64),
    price: Joi.number().max(15000000),
}).required();

export const CourseDeleteSchema = Joi.object({
    id: Joi.number(),
}).required();

export const GroupPostSchema = Joi.object({
    title: Joi.string().required().max(64),
}).required();

export const GroupPutSchema = Joi.object({
    title: Joi.string().max(64),
}).required();
