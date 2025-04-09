import { Router } from "express";

import { upload } from "../configs/multer.config";
import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get(
    "/",
    commonMiddleware.query(UserValidator.query),
    userController.getAll,
);
router.get("/:id", commonMiddleware.isIdValidate("id"), userController.getById);
router.put(
    "/:id",
    authMiddleware.checkAccessToken,
    commonMiddleware.isIdValidate("id"),
    commonMiddleware.validateBody(UserValidator.update),
    userController.updateById,
);
router.delete(
    "/:id",
    authMiddleware.checkAccessToken,
    commonMiddleware.isIdValidate("id"),
    userController.deleteById,
);
router.patch(
    "/:id/block",
    authMiddleware.checkAccessToken,
    authMiddleware.isAdmin,
    userController.blockUser,
);
router.patch(
    "/:id/unblock",
    authMiddleware.checkAccessToken,
    authMiddleware.isAdmin,
    userController.unBblockUser,
);

router.patch(
    "/upload-avatar/:id",
    authMiddleware.checkAccessToken,
    upload.single("avatar"),
    commonMiddleware.isFileExists(),
    userController.uploadAvatar,
);

export const userRouter = router;
