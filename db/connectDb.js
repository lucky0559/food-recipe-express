import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://luckyme:luckymebitemedaily@cluster0.db2vh.mongodb.net/bitemedaily?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (e) {
    console.error("Error: ", e);
    process.exit(1);
  }
};
