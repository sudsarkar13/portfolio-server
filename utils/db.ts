import { config } from "dotenv";
import mongoose from "mongoose";

// Configure environment variables
config();

// Database connection
const dbUrl = process.env.MONGODB_URI || "";

const connectDB = async () => {
	try {
		await mongoose.connect(dbUrl).then((data: any) => {
			console.log(`Connected to MongoDB successfully`);
			console.log(`Database: ${data.connection.name}`);
			console.log(
				`Host: http://${data.connection.host}:${data.connection.port}/${data.connection.name}`
			);
		});
	} catch (error: any) {
		console.log(error.message);
		console.log(``);
		setTimeout(connectDB, 5000);
		console.log(``);
		console.error("Database connection failed:", error);
		process.exit(1);
	}
};

export default connectDB;
