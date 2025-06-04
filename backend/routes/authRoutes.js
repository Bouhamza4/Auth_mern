import express from "express";
import { register, login } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getAllUsers,
  getUserById,
  getUsersByFiliere,
  createUserById,
  updatePassword,
  deleteUserById
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, getAllUsers);
router.get("/:id",authMiddleware, getUserById);
router.get("/filiere",authMiddleware, getUsersByFiliere);
router.post("/:id",authMiddleware, createUserById);
router.put("/pass/:id",authMiddleware, updatePassword);
router.delete("/:id",authMiddleware, deleteUserById);

export default router;
