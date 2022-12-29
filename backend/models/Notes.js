const mongoose=require('mongoose');
const authSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
    },
    date:{
        type: Date,
        default:Date.now()
    }
    
})
module.exports = mongoose("Auth",authSchema)