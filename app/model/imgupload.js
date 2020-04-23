const mongoose = require('mongoose');
const Imguploadchema= new mongoose.Schema({
    filename: {type:String},
    filesize: {type:Number},
    base64: {type:String}
})
const Imgupload=mongoose.model('Imgupload', Imguploadchema)

module.exports =Imgupload