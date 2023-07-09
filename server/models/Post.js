import mongoose from "mongoose";

// This is the schema for our posts
// const postSchema = mongoose.Schema({ means that we are using the mongoose schema
// userId: { means that we are using the mongoose schema
// type: String, means that we are using the mongoose schema
// required: true, means that we are using the mongoose schema
// }, means that we are using the mongoose schema
// firstName: { means that we are using the mongoose schema
// type: String, means that we are using the mongoose schema
// required: true, means that we are using the mongoose schema
// }, means that we are using the mongoose schema
// lastName: { means that we are using the mongoose schema
// type: String, means that we are using the mongoose schema
// required: true, means that we are using the mongoose schema
// }, means that we are using the mongoose schema
// location: String, means that we are using the mongoose schema
// description: String, means that we are using the mongoose schema
// picturePath: String, means that we are using the mongoose schema
// userPicturePath: String, means that we are using the mongoose schema
// likes: { means that we are using a Map for our likes which will be a key value pair instead of an array so the it will be easier for our database to search for the required user id
// type: Map, means that we are using a Map for our likes which will be a key value pair instead of an array so the it will be easier for our database to search for the required user id
// of: Boolean, means that we are using a Map for our likes which will be a key value pair instead of an array so the it will be easier for our database to search for the required user id
// }, means that we are using a Map for our likes which will be a key value pair instead of an array so the it will be easier for our database to search for the required user id
// comments: { means that we are using an array for our comments
// type: Array, means that we are using an array for our comments
// default: [], means that we are using an array for our comments
// }, means that we are using an array for our comments
// { timestamps: true } means there will be a timestamp for when the post was created in the database
// const Post =  mongoose.model("Post", postSchema); means that we are using the mongoose model for our post schema
const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: [],
        }
    },
    { timestamps: true }
);

const Post =  mongoose.model("Post", postSchema);

export default Post;