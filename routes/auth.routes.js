const authController=require('../controllers/auth.controller')

module.exports=function(app){
    app.post('/auth/signup/:role', authController.signup);
    app.post('/auth/signin/:role',authController.signin);
}