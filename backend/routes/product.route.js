import express from "express";
import { createProduct, deleteProduct, getProdcuts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProdcuts);

router.post("/" , createProduct);

router.put("/:id", updateProduct);


router.delete("/:id", deleteProduct); 

export default router;