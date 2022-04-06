const mongoose = require('mongoose')

const supportSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'},
         queries:[{
             query:{
                 type:String
             },
             response:{
                 typr:String
             }
         }]
    
})

module.exports = mongoose.model('support', supportSchema)