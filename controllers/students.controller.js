const Student =require("../models/student");
const {ADMIN,COMPANY,STUDENT}=require("../constants/roles");

exports.findAll=(req,res)=>{
    if(req.user.role==STUDENT){
        return res.status(401).send({
            message:"Access Denied"
        })
    }
    console.log(req.user.role);
    Student.find({})
    .then(students=>res.status(200).send(students))
    .catch(error=>res.status(400).send({
        message:"Internal server error"
    }))
}

exports.findById=(req,res)=>{
    if(req.user.role==STUDENT){
        return res.status(401).send({
            message:"Access Denied"
        })
    }
    Student.findById(req.params.id)
    .then(students=>res.status(200).send(students))
    .cathc(error=>res.status(400).send({
        message:"Internal Server Error"
    }))
}

exports.delete=(req,res)=>{
    if(req.user.role!=ADMIN){
        return res.status(401).send({
            message:"Access Denied"
        })
    }
    Student.deleteOne({_id:params.id})
    .then(success=>res.status(200).send(
        success.deletedCount.toString()
    ))
    .catch(error=>res.status(400).send({
        message:"Internal Servar Error"
    }))
}