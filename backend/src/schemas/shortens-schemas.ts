import { shortens } from "@prisma/client";
import Joi from "joi";

export const shortSchema = Joi.object<shortens>({
  userId: Joi.number(),
  url: Joi.string().required(),
});
export const shortPutSchema = Joi.object({
  shortId: Joi.number().required(),
  url: Joi.string().required(),
});
