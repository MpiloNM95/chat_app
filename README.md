# CHAT APP
## Introduction
## Installation
### Server Installation
Create a server folder with the following command in terminal:
```
mkdir server
```
Change the directory to the server folder with the following command:
```
cd server
```
This will generate a package.json file in the server folder:
* Dont change anything just press enter
```
npm init -y
```
Now install nodemone in the server folder with following command:
* Nodemon ~ Installing nodemone so that the node is running through a live server
```
npm i -g nodemon
```
Now install the different packages that will be used in this server component
* Express ~ for the library
* Body-parser ~ to process the request body
* Bcrypt ~  for password encryption
* CORS ~ for cross origin requests
* Dotenv ~ for environment variables
* Gridfs-stream ~ for file uploads
* Multer Multer-Gridfs-storage ~ so files can be uploaded locally
* Helmet - for request safety 
* Morgan - for login
* JSONWebToken (JWT) ~ for authentication
* Mongoose ~ for mongodb access
```
npm i express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose
```
### Client Installation
Now that we are done with the Mongo Database and the Server its now time to create the client side folder which is know as the frontend for the application.

Create the client side (frontend) folder you will now use the following commands

* To leave the server directory you need to do the following command in your Terminal:
```
cd ..
```
* This will take you back main folder which is the chat app folder

Now that you have done that its now time to create the client folder with the following command in your terminal make sure you are in the main folder:
```
npx create-react-app client
```
This will then create a react application inside the client folder change the directory to client so you can install the following packages for the client component
* React-redux ~ this being the most popular enterprize state level management tool
* @Redux/toolkit ~ makes very easy to use redux, its a wrapper around redux which make very simple and easy to redux main state library that we are going to use
* Redux-persist ~ so I can selectively store state into local if I need to. Also If I want to the user and token information to local stae so when the user closes the tab and they comeback the user information is still there in the browser
* React-dropzone ~ this will handle the file uploading and file handling on the frontend so we can send to the backend
* Dotenv ~ for the environmental variables
* Formik ~ for the form handling
* Yup ~ for the validation
* React-router-dom@6 ~ for handling all the different react routes and pages 
* @MUI/Material ~ for the all the material ui packages which include the following:
```@emotion/react, @emotion/styled, @mui/icons-material```
```
npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material
```
## Usage
### Server Usage (backend)
For the server in order to test its running on mongo database
```
cd server 
```
Because nodemon has already been installed you need to have in package.json file, you have this script command under test:
```
"start": "nodemone index.js"
```
This means after you have setup the mongoose and .env (envrionmental file) the you can run the following command in your terminal
```
npm start
```
This should allow the server to run on the Port Number you have configured for the mongo database
### Client Usage (frontend)
After you have used the command in the installation section for the client you will now follow these commands in your terminal to run the client side

* Now installation is done for the client side (frontend).
* Simply just change the directory to the client with this command in your terminal:
```
cd client
```
* Then use this command in your termainal to start the client side (frontend) in order to the changes that you need to make while building the frontend of the chat app, the command is as follows:
```
npm start
```
## Contributing
## Related Projects
## Licensing
## Deployment Tools