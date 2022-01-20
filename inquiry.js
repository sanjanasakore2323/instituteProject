var express = require('express');
const inquirycontroller = require('../controller/inquirycontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
  inquirycontroller.getAllinquiry((inquiry)=>{
    res.send({error:false,data:inquiry});

  })
});

router.post('/find',(req,res,next)=>{
  let id=req.body.id
  inquirycontroller.getByid(id,(inquiry)=>{
   res.send({error:false,data:inquiry});
 
  })
});
router.post('/create',(req,res,next)=>{
  inquirycontroller.addNewinquiry(req.body,(inquiry)=>{
    if (inquiry.affectedRows > 0){
      res.send({error:false,message: "new inquiry added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let id=req.body.id
  inquirycontroller.deleteByid(id ,(inquiry)=>{
    (inquiry.affectedRows > 0) ?
    res.send({error:false,message:"inquiry data deleted"})
    :
    res.send({error:false,message:"inquiry data not found for  delete"});
  }) 
});
router.post('/update/:inquirytype',(req, res, next) => {
  let id = req.params.id; 
  inquirycontroller.updateinquiry(id,req.body,(inquiry) => {
{      res.send({ error: false, message: "inquiry record updated successfully" })
    }
  })
});
 
module.exports = router;
