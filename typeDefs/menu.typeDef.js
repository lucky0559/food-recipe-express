const menuTypeDef = `#graphql
  type Menu {
    _id: ID!
    name: String!
    image: String!
    recipes: [String!]!
    procedures: [String!]
  }

  type Query {
    menus: [Menu]!
    menu(menuId:ID!): Menu
  }

  type Mutation {
    createMenu(input: AddMenuInput!): Menu
  }

  input AddMenuInput {
    name: String!
    image: String!
    recipes: [String!]
    procedures: [String!]
  }
`;

export default menuTypeDef;
