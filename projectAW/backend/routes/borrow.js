var expressFunction = require('express');
 const router = expressFunction.Router(); 
 const mongoose = require('mongoose'); 
 const bcrypt = require('bcryptjs');

var Schema = require("mongoose").Schema;
 const borrowSchema = Schema({
    name: String,
    date: String,
    music: String,
    timein: String,
    timeout: String
}, {
    collection: 'databorrow'
});

let Borrow 
try {
    Borrow = mongoose.model('databorrow')
} catch (error) {
    Borrow = mongoose.model('databorrow', borrowSchema);
}

const insertBorrow = (dataBorrow) => {
    return new Promise ((resolve, reject) => { 
        var new_user = new Borrow({
            name: dataBorrow.name,
            date: dataBorrow.date,
            music: dataBorrow.music, 
            timein: dataBorrow.timein,
            timeout: dataBorrow.timeout
        });
        new_user.save((err, data) => { 
            if(err){
                reject(new Error('Cannot insert data to DB!')); 
            }else{
                resolve({message: 'add data successfully'});
            }
        });
    });
}
const getBorrow = () => {
    return new Promise((resolve, reject) => {
        Borrow.find({}, (err, data) => {
            if (err) {
                reject(new Error('Cannont get Borrow'));
            } else {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error('Cannont get Borrow'));
                }
            }
        })
    });
}
router.route('/borrow')
    .get((req, res) => {
        console.log('get');
        getBorrow()
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            })
    });
router.route('/borrow')
    .post((req, res) => {
        console.log('add');
        insertBorrow(req.body)
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            })
    })
router.route('/delete/:id')
    .delete(async (req, res) => {
    const { id } = req.params

    await Borrow.findByIdAndDelete(id)
    res.status(204).end()
})
module.exports = router