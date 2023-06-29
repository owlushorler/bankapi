const mongoose = require('mongoose')
const schema = mongoose.Schema


const userSchema = new schema({
    name: {type: "string", require: true},
    email: {type: 'string',require: true},
    phone: {type: 'string',require: true},
    password: {type:'string',require: true},
    account_balance: {type: 'Number',require: true},
    account_number: {type: 'Number',require: true},
   register_date: {type: 'date',default: Date.now},
   userRef: {type: 'string', default: '',},

})

module.exports = mongoose.model('User', userSchema)