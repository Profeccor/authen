const {Todo} = require ('../models')
module.exports = class{
    static createTodo(req,res){
        const {title,status,description,userID}=req.body
        Todo.create({
            title,
            status,
            description,
            userID: req.currentUser
        })
        .then((result) =>{
            res.status(201).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    static getMyTodo(req,res){
        Todo.findAll({
            where: {
                userID: req.currentUser,
            },
        })
        .then (result =>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).json({msg:'internal server error'})
        })
    }
}