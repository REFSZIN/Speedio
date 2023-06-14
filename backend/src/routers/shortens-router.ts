import { Router } from "express";

import { shortSchema, shortPutSchema } from "@/schemas";
import { shortMeGet, showRank, shortLink, shortPut, deleteShort, showShort } from "@/controllers";
import { authenticateToken, validateBody } from "@/middlewares";

const shortensRouter = Router();

shortensRouter.post("/", validateBody(shortSchema), shortLink);
shortensRouter.get("/rank", showRank);
shortensRouter.get("/:shortUrl", showShort);
shortensRouter.all("/*", authenticateToken);
shortensRouter.delete("/", deleteShort);
shortensRouter.get("/me/list", shortMeGet);
shortensRouter.put("/", validateBody(shortPutSchema), shortPut);

export { shortensRouter };
