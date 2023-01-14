import { Router } from "express";
import { method as productsController } from "../controllers/products.controller";

const router = Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.addProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

export default router;
