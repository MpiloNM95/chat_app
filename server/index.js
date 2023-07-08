import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

/* CONFIGUARATIONS */
// This will be the middlware which runs inbetween requests are being made
// const __filename = fileURLToPath(import.meta.url); means that we are using the current file name as the path specifically when use modules
// This only applies when you use the type modules as found in our package.json file
// Going to envoke dotenv so we can use the .env files
// Going to envoke our express files so we can use middleware
// This is the port that we will be using for our server
// app.use(express.json()); This is the middleware that will allow us to send data in json format
// app.use(helmet()); This is the middleware that will allow us to secure our api
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); This is the middleware that will allow us to secure our api
// app.use(morgan("common")); This is the middleware that will allow us to log our api
// app.use(bodyParser.json({ limit: "30mb", extended: true })); This is the middleware that will allow us to send data in json format
// app.use(bodyParser.urldncoded({ limit: "30mb", extended: true })); This is the middleware that will allow us to send data in json format
// app.use(cors()); This is the middleware that will allow us to use cors
// app.use("/assets", express.static(path.join(__dirname, 'public/assets'))); This is the middleware that will allow us to use static files which will be the images from our local file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urldncoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
// This is the storage engine that will be used to store our files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    }, 
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage }); 