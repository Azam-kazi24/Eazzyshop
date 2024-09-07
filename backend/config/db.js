import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://azam:azam%40123321@atlascluster.uryohwo.mongodb.net/AtlasCluster", {
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to DB on host: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDB;
