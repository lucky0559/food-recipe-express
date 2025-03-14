import { mergeTypeDefs } from "@graphql-tools/merge";
import menuTypeDef from "./menu.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([menuTypeDef]);

export default mergedTypeDefs;
