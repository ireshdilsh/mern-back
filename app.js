const express = require('express');
const app = express();
const cors = require('cors');

//import controller file
const controllerFile = require('./controller');

// add middleware
app.use(cors());

// convert data like array,String or object (html walin eddi)
app.use(
    express.urlencoded({
        // this is using can anything encoded data in the request body
        extended: true,
    })
)

app.use(express.json());

// get all users in array
app.get('/users',(req,res) => {
    controllerFile.getUsers(users => {
        res.send();
    })
});

app.post('add/user',(req,res) => {
    controllerFile.addUser(req.body,(callack) => {
        res.send();
    });
})

app.put('update/user',(req,res) => {
    controllerFile.updateUser(req.body,(callack) => {
        res.send();
    });
});

app.delete('delete/user',(req,res) => {
    controllerFile.deleteUser(req.body,(callack) => {
        res.send();
    });
});

module.exports = app;