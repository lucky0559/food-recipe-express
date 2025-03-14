import { menus } from "#root/mockData/data..js";

const menuResolver = {
  Query: {
    menus: () => {
      return menus;
    },
    menu: (_, { menuId }) => {
      return menus.find(menu => menu._id === menuId);
    }
  },
  Mutation: {}
};

export default menuResolver;
