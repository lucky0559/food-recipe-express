import { ApolloServer } from "@apollo/server";
import mergedTypeDefs from "./typeDefs/index.js";
import mergedResolvers from "./resolvers/index.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
import { graphqlUploadExpress } from "graphql-upload";

dotenv.config();

// Configure Multer with Cloudinary
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "uploads", // Cloudinary folder name
//     public_id: (req, file) => file.originalname.split(".")[0] // Use original filename
//   }
// });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// export const upload = multer({ storage });

// Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: ({ req }) => ({ req }),
  uploads: false
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 }
// });

await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  "/graphql",
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Apollo-Require-Preflight"
    ]
  }),
  express.json(),
  graphqlUploadExpress(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server)
);

// Modified server startup
await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
await connectDb();

console.log(`🚀  Server ready at: http://localhost:4000/graphql`);
