import User from "../models/User.js";

// 1. Get all users
export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// 2. Get user by ID
export const getUserById = async (req, res) => {
  const user = await User.findOne({ id: req.params.id });
  if (user) res.json(user);
  else res.status(404).json({ message: "Utilisateur non trouvé" });
};

// 3. Get users by filiere
export const getUsersByFiliere = async (req, res) => {
  const filiere = req.query.f;
  const users = await User.find({ filiere });
  res.json(users);
};

// 4. Create user by ID
export const createUserById = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).json({ message: "Utilisateur créé" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 5. Update password
export const updatePassword = async (req, res) => {
  const { password } = req.body;
  const user = await User.findOne({ id: req.params.id });
  if (user) {
    user.password = password;
    await user.save();
    res.json({ message: "Mot de passe modifié" });
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé" });
  }
};

// 6. Delete user by ID
export const deleteUserById = async (req, res) => {
  const deleted = await User.findOneAndDelete({ id: req.params.id });
  if (deleted) res.json({ message: "Utilisateur supprimé" });
  else res.status(404).json({ message: "Utilisateur non trouvé" });
};
