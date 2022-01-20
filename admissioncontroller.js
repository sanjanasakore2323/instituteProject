const connection=require('./connection');


module.exports ={

    getAllinquiry:(callback) => {
     connection.query(`SELECT * FROM admission`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getByadid:(adid,callback) => {
        connection.query(`SELECT adid,formno,firstname,lastname,age,dateofbirth,feespaid,pendingfee FROM admission WHERE adid=${adid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewadmission:(data,callback) => {
        connection.query(`INSERT INTO admission( adid,formno,firstname,lastname,age,dateofbirth,feespaid,pendingfee) VALUES ('${data.adid}','${data.formno}','${data.fristname}','${data.lastname}','${data.age}','${data.dateofbirth}','${data.feespaid})','${data.pendingfee}`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteByadid:(adid,callback) => {
        connection.query(`DELETE FROM admission WHERE adid=${adid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updateadmission:(adid,data,callback) => {
        connection.query(`UPDATE admission SET adid='${data.adid}',formno='${data.formno}',firstname='${data.fristname}',lastname='${data.lastname}',age='${data.age}',dateofbirth='${data.dateofbirth}',feespaid='${data.feespaid}', WHERE adid='${adid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}