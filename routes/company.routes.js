const conpanyController=require("../controllers/companies.controller");
const verifyToken=require("../middleware/authVerify");
module.exports=function(app){
    app.get("/company", verifyToken.authVerify, conpanyController.findAll);
    app.get("/company/:id", verifyToken.authVerify,conpanyController.findById);
    app.delete("/company/:id",verifyToken.authVerify,conpanyController.delete);
}