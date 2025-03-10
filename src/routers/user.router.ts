import {Router} from "express";
import {userController} from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getAll)
router.post("/", userController.create)
router.get("/:id", userController.getById)

export const userRouter = router