const connection=require('./connection');


module.exports ={

    getAllreceipt:(callback) => {
     connection.query(`SELECT * FROM receipt`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getByrid:(rid,callback) => {
        connection.query(`SELECT rid, incomehead,incomesubhead, receivedname, cno FROM receipt WHERE rid=${rid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewreceipt:(data,callback) => {
        connection.query(`INSERT INTO receipt(rid, incomehead,incomesubhead, receivedname) VALUES ('${data.rid}','${data.incomehead}','${data.incomehead}','${data.receivedname}`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteByrid:(rid,callback) => {
        connection.query(`DELETE FROM receipt WHERE rid=${rid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updatereceipt:(rid,data,callback) => {
        connection.query(`UPDATE receipt SET rid='${data.rid}',incomehead='${data.incomehead}',='${data.incomesubhead}',receivedname='${data.receivedname}', WHERE rid='${rid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}