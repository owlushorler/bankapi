const express = require('express')
const router = express.Router()



// user model
const user = require('../model/user')



router.post('/',async (req,res)=>{
    const {email, account_number,amount} = req.body
   // console.log(email, email1)

    //little validation
    if(!email){
    if(!account_number ) {
      return res.status(400).json({msg:'imput the user act  number'})
  }  
    res.status(200).json({msg:'enter your email address'})
  }

  const lov = await user.findOne({account_number})       
 const mon = await user.findOne({email})
// second validation
 if(mon.account_balance < amount){
  return res.status(400).json({msg:'your account balance is not enough'})
 }
 
 const re = await  user.updateOne({account_number:lov.account_number}, {$set:{account_balance:`${amount + lov.account_balance}`}})
 const ree = await  user.updateOne({account_number:mon.account_number}, {$set:{account_balance:`${mon.account_balance - amount}`}})
    
 console.log(mon.account_balance,lov.account_balance ,amount)

res.json({re:re})
})
 
 

// post rqrs for registration 

module.exports = router;