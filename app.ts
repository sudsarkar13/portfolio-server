import { config } from "dotenv";
import express from "express";

// Configure environment variables
config();

export const app = express();
