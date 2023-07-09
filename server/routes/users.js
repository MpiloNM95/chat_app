import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// Now we are going to implement the read routes which comes from CRUD (Create, Read, Update, Delete) and we will be using the read routes to get the user and the user friends
// router.get("/:id", verifyToken, getUser); means that we are using the get method to get the user by id and we are using the verifyToken middleware to verify the token
// This works with the id which will be called from the front and with the particular user id that can be called from the database and the getUser function which will be called from the controllers/user.js file
// This /:id is what is called query strings from the frontend to the backend and this is how we are going to get the user id from the frontend to the backend
// This "/:id/friends" is how we are going to get the user friends from the frontend to the backend
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
// Now we are going to implement the update routes which comes from CRUD (Create, Read, Update, Delete) and we will be using the update routes to add and remove friends
// router.patch("/:id/:friendId", verifyToken, addRemoveFriend); means that we are using the patch method to add and remove friends and we are using the verifyToken middleware to verify the token
// This means that we need the user id in order to determine whether we are going to add or remove a friend, this is like facebook or instagram where you can follow or remove a friend
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;