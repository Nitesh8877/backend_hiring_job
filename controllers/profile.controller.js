const Admin=require("../models/admin");
const Student=require("../models/student");
const Company=require("../models/company");

const {STUDENT, ADMIN, COMPANY}=require('../constants/roles');

exports.getProfile=(req,res)=>{
    const {_id,role}=req.user
    if(role==ADMIN){
        return Admin.findById(_id)
        .then(data=>{
            const user=data.toObject();
            delete user.password;
            res.status(200).send(user);
        })
        .catch(error=>res.status(400).send({message:error.message}))
    }

    if(role==COMPANY){
        return Company.findById(_id)
        .then(data=>{
            const user=data.toObject();
            delete user.password
            res.status(200).send(user);
        })
        .catch(error=>res.status(400).send({message:error.message}));

    }
    if(role==STUDENT){
        return Student.findById(_id)
        .then(data=>{
            const user=data.toObject();
            delete user.password;
            res.status(200).send(user);
        })
        .catch(error=>res.status(400).send({message:error.message}));

    }
}

exports.getProfileById=(req,res)=>{
    Student.findById(req.params.id)
    .then(data=>{
        const user=data.toObject();
        delete user.password;
        res.status(200).send(user);
    })
    .catch(error=>res.status(400).send({message:error.message}));
}

exports.updataProfile=(req,res)=>{
    const {_id,role}=req.user;
    const {
        firstName,
        lastName,
        companyName,
        companyEmail,
        companyPhone,
        phone
    }=req.body
    if(role==COMPANY){
        return Company.updateOne(
            {_id},
            {$set:{firstName,lastName,companyName,companyEmail,companyPhone}}
        )
        .then(success=>res.status(200).send("The profile updated successfully"))
        .catch(error=>res.status(400).send({message:error.message}))
    }
    if(role==ADMIN){
        return Admin.updateOne({_id},{$set:{
            firstName,lastName
        }})
        .then(success=>res.status(200).send("The profile updated successfully"))
        .catch(error=>res.status(400).send({message:error.message}))

    }
    if(role==STUDENT){
        return Student.updateOne({_id},{$set:{
            firstName,lastName,phone
        }})
        .then(success=>res.status(200).send("The profile updated successfully"))
        .catch(error=>res.status(400).send({message:error.message}))

    }
}