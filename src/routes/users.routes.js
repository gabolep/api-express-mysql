import { Router } from "express";
import { method as usersController } from "../controllers/users.controller";

const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.addUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

export default router;
