const jwt = require ('jsonwebtoken')
const {User} = require('../models')
module.exports = function (req,res,next){
    const token = req.headers.accesstoken
    const secretKeys= process.env.SECRETKEY
    try{
        const decoded = jwt.verify(token,secretKeys)
        const {id,email,username}= decoded
        User.findAll({
        where:{
            id: id
        }
    })
    .then(result=>{
        if (result.length >= 1){
            req.currentUser = id
            next()
        }else{
            res.status(403).json({
                msg:'invalid ID'
            })
        }
    })
    .catch(err=>{
        res.status(500).json({err: 'internal server error'})
    })
    }
    catch (err){
        console.log(err)
        res.status(500).json({err:'invalid accesstoken'})
    }
        
}