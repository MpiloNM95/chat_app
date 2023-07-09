import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router =  express.Router();

/* READ */
// router.get("/", verifyToken, getFeedPosts); this will grab the user feed when we are on the home page
// The homapage will give all the posts from the databse that the user is following
// Obviously on a production level app you want this to be curated to the user as you will have an algorithm that will give the user posts that they are interested in
// But in nowadays most companies are using AI and machine learning to do this
// For the use case of this project Im just going to keep it simple and just give the user all the posts from the database
// Now router.get("/:userId/posts", verifyToken, getUserPosts); this will grab the user posts that areonly relevant to the user
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
// router.patch("/:id/like", verifyToken, likePost); this will allow the user to like a post or unliking the post of any user in the database
router.patch("/:id/like", verifyToken, likePost);

export default router;