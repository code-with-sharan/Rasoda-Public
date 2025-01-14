import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  genOtp: {
    type: String,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  recipeCount: {
    type: Number,
    default: 0,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
});

const userModel = mongoose.model.user || mongoose.model("user", userSchema);
export default userModel;
