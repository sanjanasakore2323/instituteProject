const connection=require('./connection');


module.exports ={

    getAllemployee:(callback) => {
     connection.query(`SELECT * FROM employeedetails`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getByemid:(emid,callback) => {
        connection.query(`SELECT emid,name,employeetype,ename,gender,joindate FROM employeedetails WHERE emid=${emid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewemployee:(data,callback) => {
        connection.query(`INSERT INTO employeedetails(emid,name,employeetype,ename,gender,joindate) VALUES ('${data.emid}','${data.name}','${data.employeetype}','${data.ename}','${data.gender}','${data.joindate}`,(err, result) => {
           if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteByemid:(emid,callback) => {
        connection.query(`DELETE FROM admission WHERE emid=${emid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updateemployee:(emid,data,callback) => {
        connection.query(`UPDATE employeedetails SET emid='${data.emid}',name='${data.name}',employeetype='${data.employeetype}',ename='${data.ename}',gender='${data.gender}',joindate='${data.joindate}', WHERE emid='${emid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}