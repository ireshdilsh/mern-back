// import app.js file
const app = require("./app");
// import mongoose
const mongoose = require('mongoose');
const express = require('express');
//const app = express();
const cors = require('cors');

// import router
const route = require('./router'); 

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://ireshdilshan46:1234@cluster0.qc9i7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// create  db connection
const connection = async() =>{
    try {
        await mongoose.connect(uri);
        console.log("DB Connected !!!");
    } catch (error) {
        console.log(error);
    }
}

// calling connection
connection();

// create server for run node.js
const server = app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.use('/api',route);