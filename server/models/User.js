import mongoose from "mongoose";

// This is the schema that will be used to store our users
// const UserSchema = new mongoose.Schema({ means that we are using the mongoose schema
//     firstName: { means that we are using the mongoose schema
//         type: String, means that we are using the mongoose schema
//         required: true, means that we are using the mongoose schema
//         min: 2, means that we are using the mongoose schema
//         max: 50, means that we are using the mongoose schema
//     }, means that we are using the mongoose schema
//     lastName: { means that we are using the mongoose schema
//         type: String, means that we are using the mongoose schema
//         required: true, means that we are using the mongoose schema
//         min: 2, means that we are using the mongoose schema
//         max: 50, means that we are using the mongoose schema
//     }, means that we are using the mongoose schema
//     email: { means that we are using the mongoose schema
//         type: String, means that we are using the mongoose schema
//         required: true, means that we are using the mongoose schema
//         max: 50, means that we are using the mongoose schema
//         unique: true, means that we are using the mongoose schema
//     }, means that we are using the mongoose schema
//     password: { means that we are using the mongoose schema
//         type: String, means that we are using the mongoose schema
//         required: true, means that we are using the mongoose schema
//         min: 5, means that we are using the mongoose schema
//         max: 50, means that we are using the mongoose schema
//     }, means that we are using the mongoose schema
//     picturePath: { means that we are using the mongoose schema
//         type: String, means that we are using the mongoose schema
//         default: "", means that we are using the mongoose schema
//     }, means that we are using the mongoose schema
//     friends: { means that we are using the mongoose schema
//         type: Array, means that we are using the mongoose schema
//         default: [], means that we are using the mongoose schema
//     }, means that we are using the mongoose schema
//     location: String, means that we are using the mongoose schema
//     occupation: String, means that we are using the mongoose schema
//     viewedProfile: Number, means that we are using the mongoose schema
//     impressions: Number, means that we are using the mongoose schema
// }, means that we are using the mongoose schema
// { timestamps: true } means that we are using the mongoose schema
// const User = mongoose.model("User", UserSchema); means that we are using the mongoose schema
// export default User; means that we are using the mongoose schema
const UserSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
            max: 50,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    }, 
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;