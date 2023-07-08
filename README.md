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
## Usage
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
## Contributing
## Related Projects
## Licensing
## Deployment Tools