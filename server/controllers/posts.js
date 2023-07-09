import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
// This will create a post for the user
// This will be a post request
// This will be a protected route
// This will be a post request to the /posts endpoint
// const { userId, description, picturePath } = req.body; this will grab the userId, description, and picturePath from the request body
// const user = await User.findById(userId); this will grab the user from the database by the userId
// const newPost = new Post({ this will create a new post
// userId, this will create a new post
// firstName: user.firstName, this will create a new post
// lastName: user.lastName, this will create a new post
// location: user.location, this will create a new post
// description, this will create a new post
// userPicturePath: user.picturePath, this will create a new post
// picturePath, this will create a new post
// likes: {}, this will create a new post
// comments: [] this will create a new post
// await newPost.save(); this will save the new post to the database
// const post = await Post.find(); this will grab all the posts from the database
// res.status(201).json(post); this will send the posts to the client
// } catch (err) { this will catch any errors
// res.status(409).json({ message: err.message }) this will send the error message to the client
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

/* READ */
// This will get all the posts from the database
// This will be a get request
// This will be a protected route
// This will be a get request to the /posts endpoint
// export const getFeedPosts = async (req, res) => { means that we are exporting this function so that we can use it in another file
// try { this will try to get all the posts from the database
// const post = await Post.find(); this will grab all the posts from the database
// res.status(200).json(post); this will send the posts to the client also 200 refers to success
// } catch (err) { this will catch any errors
// res.status(404).json({ message: err.message }) this will send the error message to the client also 404 refers to not found
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// This will get all the posts from the database that the user is following
// This will be a get request
// This will be a protected route
// This will be a get request to the /posts/:userId/posts endpoint
// export const getUserPosts = async (req, res) => { means that we are exporting this function so that we can use it in another file 
// try { this will try to get all the posts from the database that the user is following
// const { userId } = req.params; this will grab the userId from the request parameters
// const post = await Post.find({ userId }); this will grab all the posts from the database that the user is following
// res.status(200).json(post); this will send the posts to the client also 200 refers to success
// } catch (err) { this will catch any errors
// res.status(404).json({ message: err.message }) this will send the error message to the client also 404 refers to not found
export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);

    } catch (err) {
        res.status(404).json({ message: err.message })
    } 
}

/* UPDATE */
// This will allow the user to like a post or unliking the post of any user in the database
// const { id } = req.params; this will grab the id from the request parameters
// const { userId } = req.body; this will grab the userId from the request body
// const post = await Post.findById(id); this will grab the post from the database by the id
// const isLiked = post.likes.get(userId); this will check if the user has liked the post or not depending on the userId
// if (isLiked) { this will check if the user has liked the post or not
// post.likes.delete(userId); this will delete the userId from the likes object
// } else { this will check if the user has liked the post or not
// post.likes.set(userId, true); this will add the userId to the likes object or set the userId to true if the userId is not in the likes object
// const updatedPost = await Post .findByIdAndUpdate( this will update the post in the database and this is how we going to update a specific post
// id, this will update the post in the database and this is how we going to update a specific post, we are going to pass in likes in to the post we have been modifying, these will be the list likes that we have modified
// { likes: post.likes }, this will update the post in the database and this is how we going to update a specific post, we are going to pass in likes in to the post we have been modifying, these will be the list likes that we have modified
// { new: true } this will update the post in the database and this is how we going to update a specific post, we are going to pass in likes in to the post we have been modifying, these will be the list likes that we have modified
// res.status(200).json(updatedPost); this will send the updated post to the client also 200 refers to success
// } catch (err) { this will catch any errors
// res.status(404).json({ message: err.message }) this will send the error message to the client also 404 refers to not found
// Remember we always have to update the frontend once we hit the like button
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post .findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}