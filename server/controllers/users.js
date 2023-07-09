import User from "../models/User.js";

/* READ */
// export const getUser = async (req, res) => { means that we are exporting the getUser function and we are using the async function to get the user
// try { means that we are using the try catch block to get the user
// const { id } = req.params; means that we are getting the id from the request parameters
// const user = await User.findById(id); means that we are using the await keyword to wait for the user to be found by id
// res.status(200).json(user); means that we are sending the user as a json response
// } catch (err) { means that if there is an error the following will happen
// res.status(404).json({ message: err.message }); means that we are sending a 404 status and a json response with the error message
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// export const getUserFriends = async (req, res) => { means that we are exporting the getUserFriends function and we are using the async function to get the user friends
// try { means that we are using the try catch block to get the user friends
// const { id } = req.params; means that we are getting the id from the request parameters
// We are using Promise.all cause we are going to be using multiple promises to get the user friends and we are going to be using the await keyword to wait for the promises to be resolved
// This means user.friends.map((id) => User.findById(id)) means that we are mapping through the user friends and we are getting the user friends by id
// Now with const fomattedFriends = friends.map(({ _id, firstName, lastName, occupation, location, picturePath }) => { means that we are getting the user friends by id and we are destructuring the user friends by id and we are getting the id, firstName, lastName, occupation, location, picturePath for the frontend
// return { _id, firstName, lastName, occupation, location, picturePath }; means that we are returning the id, firstName, lastName, occupation, location, picturePath for the frontend
// res.status(200).json(formattedFriends); means that we are sending the formattedFriends as a json response to the frontend
export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message }); 
    }
};

/* UPDATE */
// export const addRemoveFriend = async (req, res) => { means that we are exporting the addRemoveFriend function and we are using the async function to add or remove a friend
// try { means that we are using the try catch block to add or remove a friend
// const { id, friendId } = req.params; means that we are getting the id and friendId from the request parameters
// const user = await User.findById(id); means that we are using the await keyword to wait for the user to be found by id
// const friend = await User.findById(friendId); means that we are using the await keyword to wait for the friend to be found by id
// if (user.friends.includes(friendId)) { means that if the user friends includes the friendId the following will happen
// user.friends = user.friends.filter((id) => id !== friendId); means that we are filtering through the user friends and we are getting the user friends by id and we are checking if the user friends by id is not equal to the friendId
// friend.friends = friend.friends.filter((id) => id !== id); means that we are filtering through the friend friends and we are getting the friend friends by id and we are checking if the friend friends by id is not equal to the id
// } else { means that if the user friends does not include the friendId the following will happen
// user.friends.push(friendId); means that we are pushing the friendId to the user friends
// friend.friends.push(id); means that we are pushing the id to the friend friends
// } means that if the user friends includes the friendId the following will happen and if the user friends does not include the friendId the following will happen
// await user.save(); means that we are using the await keyword to wait for the user to be saved
// await friend.save(); means that we are using the await keyword to wait for the friend to be saved
export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};