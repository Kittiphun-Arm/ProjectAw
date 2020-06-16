const expressFunction = require('express'); 
const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');

const router = expressFunction.Router();

const key = 'MY_KEY';

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

const compareHash = async(plainText, hashText) => { 
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainText, hashText, (err, data) => { 
            if(err){
                reject(new Error('Error bcrypt compare'))
            }else{
                 resolve({status: data});
            }
        })
    });
}

const findUser = (username) =>{
    return new Promise((resolve, reject) => {
        Members.findOne({username: username}, (err, data) => { 
            if (err){
                reject(new Error('Cannont find username!'));
            }else{
                if(data){
                    resolve({id: data._id, username: data.username, password: data.password}) 
                }else{
                    reject(new Error('Cannont find username!'));
                }
            }	
        })
    })
}

router.route('/signinmembers').post( async (req, res)=>{ 
        const playload = {
            username: req.body.username, 
            password: req.body.password
        };

        console.log(playload); 

        try {
            const result = await findUser(playload.username);
            const loginStatus = await compareHash(playload.password, result.password); 

            const status = loginStatus.status; 

            if (status){
                const token = jwt.sign(result, key, {expiresIn: 60*5}); 
                res.status(200).json({result, token, status});
            }else{
                res.Status(200).json({status});
            }

        } catch (error) {
            res.status(404).send(error);
	    }	
    })

module.exports = router