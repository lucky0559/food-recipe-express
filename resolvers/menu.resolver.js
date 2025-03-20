import { menus } from "#root/mockData/data..js";
import Menu from "../models/menu.model.js";

const menuResolver = {
  Query: {
    allMenu: async (_, a, context) => {
      try {
        // if(!context.getUser()) throw new Error("Unauthorized")
        return menus;
      } catch (e) {
        console.error("Error getting all menu: ", e);
        throw new Error("Error getting all menu");
      }
    },
    menuById: (_, { menuId }) => {
      try {
        return menus.find(menu => menu._id === menuId);
      } catch (e) {
        console.error("Error getting menu by id: ", e);
        throw new Error("Error getting menu by id");
      }
    },
    menuByCategory: (_, { category }) => {
      try {
        return menus.filter(menu => menu.category === category[0]);
      } catch (e) {
        console.error("Error getting menu by category: ", e);
        throw new Error("Error getting menu by category");
      }
    }
  },
  Mutation: {
    createMenu: async (_, { input }) => {
      try {
        console.log(input);

        // const newMenu = new Menu({ ...input });
        // await newMenu.save();
        return input;
      } catch (e) {
        console.error("Error adding new menu: ", e);
        throw new Error("Error adding new menus");
      }
    },
    updateMenu: async (_, { input }, context) => {
      try {
        const updatedMenu = await Menu.findByIdAndUpdate(input.menuId, input, {
          new: true
        });
        return updatedMenu;
      } catch (e) {
        console.error("Error updating menu: ", e);
        throw new Error("Error updating menu");
      }
    },
    deleteMenu: async (_, { menuId }, context) => {
      try {
        const deletedMenu = await Menu.findByIdAndDelete(menuId);
        return deletedMenu;
      } catch (e) {
        console.error("Error deleting menu: ", e);
        throw new Error("Error deleting menu");
      }
    }
  }
};

export default menuResolver;
