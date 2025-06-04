import express from "express";
<<<<<<< HEAD
import { register, login } from "../controllers/authController.js";
=======
import { register, login, getAllUsers , getUserById , updatePassword } from "../controllers/authController.js";
>>>>>>> 6b58b09b904c2e319ab10e5a8bb7dbfeb6ba72e6
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
//bouhamza
router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, getAllUsers);
<<<<<<< HEAD
router.get("/:id",authMiddleware, getUserById);
router.get("/filiere",authMiddleware, getUsersByFiliere);
router.post("/:id",authMiddleware, createUserById);
router.put("/pass/:id",authMiddleware, updatePassword);
router.delete("/:id",authMiddleware, deleteUserById);
=======
// Oussama
router.get("/users/:id", authMiddleware, getUserById);
router.put("/users/:id/password", authMiddleware, updatePassword);
>>>>>>> 6b58b09b904c2e319ab10e5a8bb7dbfeb6ba72e6

export default router;
