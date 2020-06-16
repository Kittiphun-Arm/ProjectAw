var expressFunction = require('express');
 const router = expressFunction.Router(); 
 const mongoose = require('mongoose'); 
 const bcrypt = require('bcryptjs');

var Schema = require("mongoose").Schema;
 const membersSchema = Schema({
    firstname: String,
    lastname: String,
    username: String, 
    email: String,
    password: String,
    gender: String,
    file: String,
    telephone: String,
    address: String,
    zip: String
}, {
    collection: 'datamembers'
});

let Members 
try {
    Members = mongoose.model('datamembers')
} catch (error) {
    Members = mongoose.model('datamembers', membersSchema);
}

const makeHash = async(plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const insertMembers = (dataMembers) => {
    return new Promise ((resolve, reject) => { 
        var new_user = new Members({
            firstname: dataMembers.firstname,
            lastname: dataMembers.lastname,
            username: dataMembers.username, 
            email: dataMembers.email,
            password: dataMembers.password,
            gender: dataMembers.gender,
            file: dataMembers.file,
            telephone: dataMembers.telephone,
            address: dataMembers.address,
            zip: dataMembers.zip
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
router.route('/members')
    .post((req, res)=>{
        makeHash(req.body.password)
        .then(hashText =>{ 
            const playload = {
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                username: req.body.username,
                email:req.body.email,
                password: hashText,
                gender:req.body.gender,
                file:req.body.file,
                telephone:req.body.telephone,
                address:req.body.address,
                zip:req.body.zip
            }
            console.log(playload); 
            insertMembers (playload)
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