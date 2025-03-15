const menuTypeDef = `#graphql
  type Menu {
    _id: ID!
    name: String!
    image: String!
    description: String!
    recipes: [String!]!
    procedures: [String!]
    category: [String!]
  }

  type Query {
    allMenu: [Menu!]
    menuById(menuId:ID!): Menu
    menuByCategory(category:[String]): [Menu!]
  }

  type Mutation {
    createMenu(input: CreateMenuInput!): Menu!
    updateMenu(input: UpdateMenuInput!): Menu!
    deleteMenu(menuId: ID!): Menu!
  }

  input CreateMenuInput {
    name: String!
    image: String!
    description: String!
    recipes: [String!]
    procedures: [String!]
    category: [String!]
  }

  input UpdateMenuInput {
    menuId: ID!
    name: String!
    image: String!
    description: String!
    recipes: [String!]
    procedures: [String!]
    category: [String!]
  }
`;

export default menuTypeDef;
