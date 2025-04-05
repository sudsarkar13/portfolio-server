import { app } from "./app";
import connectDB from "./utils/db";

// create server
app
	.listen(process.env.PORT, () => {
		console.log(``);
		console.log(`🚀 Server is running:`);
		console.log(`→ Local:    http://localhost:${process.env.PORT}`);
		console.log(`→ Time:     ${new Date().toLocaleString()}`);
		console.log(``);
		connectDB();
	})
	.on("error", (error) => {
		console.error("Failed to start server:", error);
		process.exit(1);
	});