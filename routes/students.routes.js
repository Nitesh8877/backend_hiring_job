const StudentController=require("../controllers/students.controller");
const authverify=require("../middleware/authVerify");
module.exports=function (app){
    app.get("/students",authverify.authVerify,StudentController.findAll);
    app.get("/students/:id",authverify.authVerify,StudentController.findById);
    app.delete("/students/:id",authverify.authVerify,StudentController.delete);
}