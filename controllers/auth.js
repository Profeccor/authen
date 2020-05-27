const {User} = require ('../models')
const jwt = require ('jsonwebtoken')

module.exports = class{
    static register(req,res){
        const {username,password,email}=req.body
        const values ={
            username,
            password,
            email,
        }
        const options= {

        }
        User.create(values,options)
        .then((result)=>{
            res.status(201).json({
                msg: 'user create',
                user: result,
            })
        })
        .catch((err)=>{
            res.status(500).json({err: 'error registering'})
            detail:err
        })
    }
    static login(req,res){
        const {username,password,email}=req.body
        User.findOne({
            where:{
                email,
            }
        })
        .then((result)=>{
            if(result.password === password){
                //login success
                const secretKey = process.env.secretKey
                const payload = {
                    email : result.email,
                    username: result.username,
                    id: result.id
                }
                const options = {
                  //  expiresIn: '1h'
                }
                const userToken = jwt.sign(payload,secretKey,options)
                res.status (200).json({accessToken: userToken}
                )}
            else{
                res.status(401).json({msg: 'wrong email'})
            }
       })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }

}