import { Router } from "express";

import { authRouter } from "./auth.router";
import { pizzaRouter } from "./pizza.router";
import { userRouter } from "./user.router";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/pizzas", pizzaRouter);

export const apiRouter = router;
