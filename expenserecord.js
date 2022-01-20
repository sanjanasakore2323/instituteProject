var express = require('express');
const controller = require('../controller/expenserecordcontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
    expenserecordcontroller.getAllexpense((expenses)=>{
    res.send({error:false,data:expenses});

  })
});

router.post('/find',(req,res,next)=>{
  let eid=req.body.eid
  expenserecordcontroller.getByeid(eid,(expense)=>{
   res.send({error:false,data:expense});
 
  })
});
router.post('/create',(req,res,next)=>{
    expenserecordcontroller.addNewexpense(req.body,(expense)=>{
    if (expense.affectedRows > 0){
      res.send({error:false,message: "new expense added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let eid=req.body.eid
  expenserecordcontroller.deleteByeid(eid ,(expense)=>{
    (inquiry.affectedRows > 0) ?
    res.send({error:false,message:"expense data deleted"})
    :
    res.send({error:false,message:"expense data not found for  delete"});
  }) 
});
router.post('/update/:expensehead',(req, res, next) => {
  let eid = req.params.eid; 
  expenserecordcontroller.updateexpense(eid,req.body,(expense) => {
{      res.send({ error: false, message: "expense record updated successfully" })
    }
  })
});
 
module.exports = router;
