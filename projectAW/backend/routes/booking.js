var expressFunction = require('express');
 const router = expressFunction.Router(); 
 const mongoose = require('mongoose'); 
 const bcrypt = require('bcryptjs');

var Schema = require("mongoose").Schema;
 const bookingSchema = Schema({
    name: String,
    date: String,
    type: String,
    typeintime: String,
    typeouttime: String,
    numberpeople: String 
}, {
    collection: 'databooking'
});

let Booking 
try {
    Booking = mongoose.model('databooking')
} catch (error) {
    Booking = mongoose.model('databooking', bookingSchema);
}

const insertBooking = (dataBooking) => {
    return new Promise ((resolve, reject) => { 
        var new_user = new Booking({
            name: dataBooking.name,
            date: dataBooking.date,
            type: dataBooking.type, 
            typeintime: dataBooking.typeintime,
            typeouttime: dataBooking.typeouttime,
            numberpeople: dataBooking.numberpeople
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
const getBooking = () => {
    return new Promise((resolve, reject) => {
        Booking.find({}, (err, data) => {
            if (err) {
                reject(new Error('Cannont get Booking'));
            } else {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error('Cannont get Booking'));
                }
            }
        })
    });
}
router.route('/booking')
    .get((req, res) => {
        console.log('get');
        getBooking()
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            })
    });
router.route('/booking')
    .post((req, res) => {
        console.log('add');
        insertBooking(req.body)
            .then(result => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
            })
    })

router.route('/booking/:id')
    .get(async (req, res) => {
        const { _id } = req.params
        const booking = await Booking.find({ _id: _id })
        res.json(booking)
    })

router.route('/delete/:id')
    .delete(async (req, res) => {
    const { id } = req.params

    await Booking.findByIdAndDelete(id)
    res.status(204).end()
})
module.exports = router