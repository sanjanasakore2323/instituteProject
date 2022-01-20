var express = require('express');
const inquirycontroller = require('../controller/employeedetailscontroller');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
    employeedetailscontroller.getAllemployee((employee)=>{
    res.send({error:false,data:employee});

  })
});

router.post('/find',(req,res,next)=>{
  let emid=req.body.emid
  employeedetailscontroller.getByemid(emid,(employee)=>{
   res.send({error:false,data:employee});
 
  })
});
router.post('/create',(req,res,next)=>{
    employeedetailscontroller.addNewemployeee(req.body,(employee)=>{
    if (employee.affectedRows > 0){
      res.send({error:false,message: "new employee added successfully"})

    }
})
});  
router.post('/delete',(req,res,next)=>{
  let emid=req.body.emid
  employeedetailscontroller.deleteByemid(emid ,(employee)=>{
    (employee.affectedRows > 0) ?
    res.send({error:false,message:"employee data deleted"})
    :
    res.send({error:false,message:"employee data not found for  delete"});
  }) 
});
router.post('/update/:employeetype',(req, res, next) => {
  let emid = req.params.emid; 
  employeedetailscontroller.updateemployee(emid,req.body,(employee) => {
{      res.send({ error: false, message: "employee record updated successfully" })
    }
  })
});
 
module.exports = router;
