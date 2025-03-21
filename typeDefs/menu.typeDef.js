const menuTypeDef = `#graphql
  scalar Upload

  type FileResponse {
    url: String!
  }

  type Menu {
    _id: ID!
    name: String!
    image: FileResponse!
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

  input ImageInput {
    file: Upload
    url: String
  }

  input CreateMenuInput {
    name: String!
    image: Upload!
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
