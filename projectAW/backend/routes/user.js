var expressFunction = require('express');
 const router = expressFunction.Router(); 
 const mongoose = require('mongoose'); 
 const bcrypt = require('bcryptjs');

var Schema = require("mongoose").Schema;
 const userSchema = Schema({
    firstname: String,
    lastname: String,
    username: String, 
    email: String,
    password: String,
    telephone: String,
    gender: String,
    address: String,
    zip: String
}, {
    collection: 'dataadmin'
});

let User 
try {
    User = mongoose.model('dataadmin')
} catch (error) {
    User = mongoose.model('dataadmin', userSchema);
}

const makeHash = async(plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const insertUser = (dataUser) => {
    return new Promise ((resolve, reject) => { 
        var new_user = new User({
            firstname: dataUser.firstname,
            lastname: dataUser.lastname,
            username: dataUser.username, 
            email: dataUser.email,
            password: dataUser.password,
            telephone: dataUser.telephone,
            gender: dataUser.gender,
            address: dataUser.address,
            zip: dataUser.zip
        });
        new_user.save((err, data) => { 
            if(err){
                reject(new Error('Cannot insert user to DB!')); 
            }else{
                resolve({message: 'Singn up successfully'});
            }
        });
    });
}
router.route('/signup')
    .post((req, res)=>{
        makeHash(req.body.password)
        .then(hashText =>{ 
            const playload = {
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                username: req.body.username,
                email:req.body.email,
                password: hashText,
                telephone:req.body.telephone,
                gender:req.body.gender,
                address:req.body.address,
                zip:req.body.zip
            }
            console.log(playload); 
            insertUser (playload)
                .then(result => {
                    console.log(result);
                    res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                })
        })	
        .catch(err => {
        })
    });
module.exports = router