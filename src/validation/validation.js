import Joi from "joi";

export const LoginPostSchema = Joi.object({
    username: Joi.string().required().max(64),
    password: Joi.string().required(),
}).required();

export const CompanyPostSchema = Joi.object({
    name: Joi.string().required().max(64),
    img: Joi.string().required(),
}).required();

export const CompanyPutSchema = Joi.object({
    name: Joi.string().max(64),
    img: Joi.string(),
}).required();

export const ComplexPostSchema = Joi.object({
    name: Joi.string().required().max(64),
    company: Joi.string().required(),
}).required();

export const ComplexPutSchema = Joi.object({
    name: Joi.string().max(64),
    company: Joi.string(),
}).required();

export const BankPostSchema = Joi.object({
    name: Joi.string().required().max(64),
    upto: Joi.string().required(),
    duration: Joi.string().required(),
    starting: Joi.string().required(),
}).required();

export const BankPutSchema = Joi.object({
    name: Joi.string().max(64),
    upto: Joi.string(),
    duration: Joi.string(),
    starting: Joi.string(),
}).required();

export const RoomPostSchema = Joi.object({
    room_count: Joi.number().required().max(64),
    square_sum: Joi.string().required(),
    room_meter_square: Joi.number().required(),
    complex: Joi.string().required(),
}).required();

export const RoomPutSchema = Joi.object({
    room_count: Joi.number().max(64),
    square_sum: Joi.string(),
    room_meter_square: Joi.number(),
    complex: Joi.string(),
}).required();
