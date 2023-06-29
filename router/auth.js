const express = require('express')
const router = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')


// user model
const user = require('../model/user')



router.get('/',async (req,res)=>{
    const {name,email,password,phone,useRef} = req.body

    //little validation
    if(!email ||!password ) {
           return res.status(400).json({msg:'Please fill all fields'})
      }  
        
 const mon = await user.findOne({email})
 


  if(mon) {
   
    if(mon.password  !== password){return res.json({msg:'Password incoect pass'})}
      return res.json({mon})
  }

  if(!mon) {
    return res.json({msg:'User doest not exist'})
}

k3
})
 
 

// post rqrs for registration 

module.exports = router;