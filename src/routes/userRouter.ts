import 'reflect-metadata';
import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/userController";
import { UploadMiddleware } from '../middlewares/uploadMiddleware';

const userRouter = Router();
const userController = container.resolve(UserController);
const uploadMiddleware = container.resolve(UploadMiddleware);

userRouter.post(
    '/register', uploadMiddleware.Upload,
    userController.register.bind(userController)
);

userRouter.post(
    '/login',
    userController.login.bind(userController)
);

export default userRouter;