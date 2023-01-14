import { Router } from "express";
import { method as usersController } from "../controllers/users.controller";

const router = Router();

router.get("/", usersController.getUsers);

export default router;
