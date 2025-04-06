import mongoose from "mongoose";
// TODO: REFACTOR RECIPES AND PROCEDURES INTO TEXT FORM ONLY NOT IN ARRAY FORM
const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
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
    categories: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
