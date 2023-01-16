const profileController=require("../controllers/profile.controller");
const auth=require("../middleware/authVerify");

module.exports=function(app){
    app.get("/hiring/profile/",auth.authVerify,profileController.getProfile);
    app.get("/hiring/profile/:id",auth.authVerify,profileController.getProfileById);
    app.patch("/hiring/profile/",auth.authVerify,profileController.updataProfile);
}