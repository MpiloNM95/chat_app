import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER  USER */
// This is the register function that will be used to register a user
// This is the async function that will be used to register a user
// This is the try catch block that will be used to register a user
// This is the const that will be used to destructure the request body
// This is the const that will be used to generate a salt
// This is the const that will be used to hash the password
// This is the const that will be used to create a new user
// This is the const that will be used to save the new user
// This is the res.status that will be used to send a response
// This is the res.json that will be used to send a response
// export const register = async (req, res) => { means that we are using the disk storage engine
//     try { means that we are using the disk storage engine
//         const { means that we are using the disk storage engine
//             firstName, means that we are using the disk storage engine
//             lastName, means that we are using the disk storage engine
//             email, means that we are using the disk storage engine
//             password, means that we are using the disk storage engine
//             picturePath, means that we are using the disk storage engine
//             friends, means that we are using the disk storage engine
//             location, means that we are using the disk storage engine
//             occupation means that we are using the disk storage engine
//         } = req.body; means that we are using the disk storage engine
// const salt = await bcrypt.genSalt(); means that we are using the disk storage engine
// const passwordHash = await bcrypt.hash(passowrd, salt); means that we are using the disk storage engine
// const newUser = new User({ means that we are using the disk storage engine
//     firstName, means that we are using the disk storage engine
//     lastName, means that we are using the disk storage engine
//     email, means that we are using the disk storage engine
//     password: passwordHash, means that we are using the disk storage engine
//     picturePath, means that we are using the disk storage engine
//     friends, means that we are using the disk storage engine
//     location, means that we are using the disk storage engine
//     occupation, means that we are using the disk storage engine
//     viewedProfile: Math.floor(Math.random() * 10000), means that we are using the disk storage engine
//     impressions: Math.floor(Math.random() * 10000) means that we are using the disk storage engine
// }); means that we are using the disk storage engine
// const savedUser = await newUser.save(); means that we are using the disk storage engine
// res.status(201).json(savedUser); means that we are using the disk storage engine
//     } catch (err) { means that we are using the disk storage engine
//         res.status(500).json({ error: err.message }) means that we are using the disk storage engine
//     } means that we are using the disk storage engine
// } means that we are using the disk storage engine
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(passowrd, salt);

        const newUser = new User({
            firstName, 
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

