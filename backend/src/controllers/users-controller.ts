import userService from "@/services/users-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function usersPost(req: Request, res: Response) {
  const { email, password, name } = req.body;

  try {
    const user = await userService.createUser({ email, password, name });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
      name: user.name
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
