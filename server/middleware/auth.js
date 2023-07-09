import jwt from 'jsonwebtoken';

// This is the verifyToken function that will be used to verify a token
// This is the async function that will be used to verify a token
// This is the try catch block that will be used to verify a token
// This is the let that will be used to get the token from the header
// if (!token) { means that if the token is not found or does not exist the following will happen Access Denied message will be sent
// In the real world the company would usually have different error messages for different errors but for this project we will just use one to make it simple
// if (token.startsWith("Bearer ")) { means that if the token starts with Bearer then the token will be placed on the right side of the Bearer, thats how we are grabbing the actual token
// token =  token.slice(7, token.length).trimLeft(); means that we are grabbing the token and slicing it to get the actual token
// const verified = jwt.verify(token, process.env.JWT_SECRET); means that we are using the jsonwebtoken to verify the token and the jwt secret (secret string that is used to sign the token)
// req.user = verified; means that we are setting the request user to the verified token
// next(); means that we are calling the next function
export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send("Access Denied");
        }

        if (token.startsWith("Bearer ")) {
            token =  token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; 
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}