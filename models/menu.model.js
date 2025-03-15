import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    recipes: {
      type: [String],
      required: true
    },
    procedures: {
      type: [String],
      required: true
    },
    category: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
