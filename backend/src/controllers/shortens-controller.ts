import { AuthenticatedRequest } from "@/middlewares";
import shortensService from "@/services/shortens-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function shortLink(req: Request, res: Response) {
  const { url, userId } = req.body;
  try {
    const shortPosted = await shortensService.postShort( url, userId );
    return res.status(httpStatus.CREATED).json({
      shortPosted
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function showShort(req: Request, res: Response) {
  const { shortUrl } = req.params;
  try {
    const productPosted = await shortensService.getShowShort( shortUrl );
    return res.status(httpStatus.CREATED).json({
      productPosted
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function showRank(req: Request, res: Response) {
  try {
    const ranking = await shortensService.getRanking();
    return res.status(httpStatus.OK).json({
      ranking
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function shortMeGet(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const id = userId;
  try {
    const myshortens = await shortensService.getMyShort( id );
    return res.status(httpStatus.OK).json({
      myshortens
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function shortPut(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { url, shortId } = req.body;
  try {
    const productPuted = await shortensService.putShort( shortId, url, userId );
    return res.status(httpStatus.CREATED).json({
      productPuted
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function deleteShort(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { shortId } = req.body;
  try {
    const productDeleted = await shortensService.shortDelete( shortId, userId );
    return res.status(httpStatus.OK).json({
      productDeleted
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
