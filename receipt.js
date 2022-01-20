var express = require('express');
const receiptcontroller = require('../controller/receiptcontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
    receiptcontroller.getAllreceipt((receipt)=>{
    res.send({error:false,data:receipt});

  })
});

router.post('/find',(req,res,next)=>{
  let rid=req.body.rid
  receiptcontroller.getByrid(rid,(receipt)=>{
   res.send({error:false,data:receipt});
 
  })
});
router.post('/create',(req,res,next)=>{
    receiptcontroller.addNewreceipt(req.body,(receipt)=>{
    if (receipt.affectedRows > 0){
      res.send({error:false,message: "new receipt added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let rid=req.body.rid
  receiptcontroller.deleteByrid(rid ,(receipt)=>{
    (receipt.affectedRows > 0) ?
    res.send({error:false,message:"receipt data deleted"})
    :
    res.send({error:false,message:"receipt data not found for  delete"});
  }) 
});
router.post('/update/:incomehead',(req, res, next) => {
  let rid = req.params.rid; 
  receiptcontroller.updatereceipt(rid,req.body,(receipt) => {
{      res.send({ error: false, message: "receipt record updated successfully" })
    }
  })
});
 
module.exports = router;
