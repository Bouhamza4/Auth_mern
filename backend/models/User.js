import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
  ville: String,
  rue: String,
  codePostal: String
});

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  filiere: String,
  // password: String,
  telephone: String,
  address: addressSchema,
  etablissement: String
});
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["user", "admin"], default: "user" }
// });

const User = mongoose.model("User", userSchema);
export default User;
