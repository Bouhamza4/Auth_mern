import express from "express";
import { register, login, getAllUsers , getUserById , updatePassword } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
//bouhamza
router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, getAllUsers);
// Oussama
router.get("/users/:id", authMiddleware, getUserById);
router.put("/users/:id/password", authMiddleware, updatePassword);

export default router;
