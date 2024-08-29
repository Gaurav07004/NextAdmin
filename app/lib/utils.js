import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Database is already connected.");
      return;
    }

    console.log("Connecting to database...");
    const db = await mongoose.connect(process.env.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("Database connection successful.");
    } else {
      console.log("Database connection failed. Status code:", connection.isConnected);
    }
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    throw new Error(error.message);
  }
};
