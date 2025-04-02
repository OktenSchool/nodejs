import { Router } from "express";

import { pizzaController } from "../controllers/pizza.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { PizzaValidator } from "../validators/pizza.validator";

const router = Router();

router.get("/", authMiddleware.checkAccessToken, pizzaController.getAll);
router.post(
    "/",
    authMiddleware.checkAccessToken,
    commonMiddleware.validateBody(PizzaValidator.create),
    pizzaController.create,
);

export const pizzaRouter = router;
