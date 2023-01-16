const jobsController=require("../controllers/jobs.controller");
const auth=require("../middleware/authVerify");

module.exports=function(app){
    app.post("/hiring/jobs/",auth.authVerify,jobsController.create);
    app.get("/hiring/jobs/",auth.authVerify,jobsController.getAll);
    app.get("/hiring/jobs/:id",auth.authVerify,jobsController.getById);
    app.delete("/hiring/jobs/:id",auth.authVerify,jobsController.delete);
    app.patch("/hiring/jobs/:id/apply",auth.authVerify,jobsController.addApplicant);
}