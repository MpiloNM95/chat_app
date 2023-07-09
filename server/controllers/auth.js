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
        res.status(500).json({ error: err.message });
    }
};

/* LOGGING IN */
// This is the login function that will be used to login a user/
// So we are grabbing the email and password from the request body when the user is trying to login to the chat app
// const user = await User.findOne({ email: email }); means that we are using the mongoose to find the user by specific email
// if (!user) return res.status(400).json({ msg: "User does not exist. "}); means that a 400 error will be thrown if the user email cannot be found or the user uses an improper email then 400 error message will be shown to the user
// const isMatch = await bcrypt.compare(password, user.password); means that we are using the bcrypt to compare the password that the user is trying to login with to the password that is stored in the database and the going to compare whether the same salt is the same
// if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. "}); means that a 400 error will be thrown if the user password cannot be found or the user uses an improper password then 400 error message will be shown to the user
// const token = jwt.sign({ id: user._id }, process.env,JWT_SECRET); means that we are using the jsonwebtoken to sign the user id and the jwt secret
// delete user.password; means that we are deleting the user password
// res.status(200).json({ token, user }); means that we are sending a 200 status and the token and the user
// This is a very basic way of doing authentcation but in the real worl company will outsource the authentication to a third party like Auth0 or Okta to make sure that the authentication is secure
// This section will send a verification code to the user email to make sure that the user is the one that is trying to login to the chat app and not someone else
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. "});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. "});

        const token = jwt.sign({ id: user._id }, process.env,JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};