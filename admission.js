var express = require('express');
const admissioncontroller = require('../controller/admissioncontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
  admissioncontroller.getAlladmission((admission)=>{
    res.send({error:false,data:admission});

  })
});

router.post('/find',(req,res,next)=>{
  let adid=req.body.adid
  admissioncontroller.getByadid(adid,(admission)=>{
   res.send({error:false,data:admission});
 
  })
});
router.post('/create',(req,res,next)=>{
    admissioncontroller.addNewadmission(req.body,(admission)=>{
    if (admission.affectedRows > 0){
      res.send({error:false,message: "new admission added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let adid=req.body.adid
  admissioncontroller.deleteByadid(adid ,(admission)=>{
    (admission.affectedRows > 0) ?
    res.send({error:false,message:"admission data deleted"})
    :
    res.send({error:false,message:"admission data not found for  delete"});
  }) 
});
router.post('/update/:firstname',(req, res, next) => {
  let adid = req.params.adid; 
  admissioncontroller.updateadmission(adid,req.body,(admission) => {
{      res.send({ error: false, message: "admission record updated successfully" })
    }
  })
});
 
module.exports = router;
