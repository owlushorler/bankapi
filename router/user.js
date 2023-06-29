const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')


// user model
const user = require('../model/user')



router.post('/',async (req,res)=>{
    const {name,email,password,phone,useRef} = req.body

    //little validation
    if(!name ||!email ||!password ||!phone ) {
           return res.status(400).json({msg:'Please fill all fields'})
      }  
        
 const mon = await user.findOne({email})


  if(!mon) {
      return res.status(400).json({msg:'User already exists'})
  }
  

const ser  = new user ({
    name
    ,email
    ,password,
    phone,
    account_balance: Math.floor(Math.random()*100000000000),
    account_number: Math.floor(Math.random()*10000),
    useRef

})
ser.save()
res.json({ser})
})
 
 

// post rqrs for registration 

module.exports = router;