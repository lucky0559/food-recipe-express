import { mergeResolvers } from "@graphql-tools/merge";
import menuResolver from "./menu.resolver.js";

const mergedResolvers = mergeResolvers([menuResolver]);

export default mergedResolvers;
