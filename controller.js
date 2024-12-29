// import usee model class
const userModel = require('./Model');

// cb -> Call Back function
const getUsers = (req,res,next) =>{
    userModel.find().then(response => {
        res.json({ response });
    }).catch(error =>{
        console.log("error");
    });
}


const addUser = (req,res,next) => {
    const user = new userModel({
        id : req.body.id,
        name : req.body.name,
    });

    user.save().then(response =>{
        res.json({ response });
    }).catch(error =>{
        console.log("error");
    });
}

const deleteUser = (req,res,next) => {
    const { id } = req.body;
    userModel.deleteOne({id : id}).then(response =>{
        res.json({ response });
    }).catch(error =>{
        console.log("error");
    });
}

const updateUser = (req,res,next) =>{
    const{ id,name } = req.body;
    userModel.updateOne({id : id},{$set : {name : name}}).then(response =>{
        res.json({ response });
    }).catch(error =>{
        console.log("error");
    });
}
// export functions
exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
