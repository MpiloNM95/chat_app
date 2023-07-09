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
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import { register } from "./controllers/auth.js";

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
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
// This is the storage engine that will be used to store our files
// const storage = multer.diskStorage({ means that we are using the disk storage engine
// destination: function (req, file, cb) { means that we are using the disk storage engine
// cb(null, "public/assets"); means that we are using the disk storage engine
// filename: function (req, file, cb) { means that we are using the disk storage engine
// cb(null, file.originalname); means that we are using the disk storage engine
// const upload = multer({ storage }); means that we are using the disk storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    }, 
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
// This is the route that will be used to upload files
// app.post("/auth/register", upload.single("picture"), register); This is the route that will be used to upload files
app.post("/auth/register", upload.single("picture"), register);

/* ROUTES */
// This is the route that will be used to register a user
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
// This is the connection to our database
// const PORT = process.env.PORT || 6001; means that we are using the current file name as the path specifically when use modules
// mongoose.connect(process.env.MONGO_URL, { means that we are using the current file name as the path specifically when use modules
// useNewUrlParser: true, means that we are using the current file name as the path specifically when use modules
// useUnifiedTopology: true, means that we are using the current file name as the path specifically when use modules
// }).then(() => { means that we are using the current file name as the path specifically when use modules
// app.listen(PORT, () => console.log(`Server Port: ${PORT}`)); means that we are using the current file name as the path specifically when use modules
// }).catch((error) => console.log(`${error} did not connect`)); means that we are using the current file name as the path specifically when use modules
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));