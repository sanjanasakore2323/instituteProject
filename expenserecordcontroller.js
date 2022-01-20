const connection=require('./connection');


module.exports ={

    getAllexpense:(callback) => {
     connection.query(`SELECT * FROM expenserecord`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getByeid:(eid,callback) => {
        connection.query(`SELECT eid,voucherdate,expenseshead,paidto,amt,particulars, modeofpay FROM expenserecord eid=${eid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewexpense:(data,callback) => {
        connection.query(`INSERT INTO expenserecord( eid,voucherdate,expenseshead,paidto,amt,particulars, modeofpay) VALUES ('${data.eid}','${data.voucherdate}','${data.expenseshead}','${data.paidto}','${data.amt}','${data.particulars}','${data.modeofpay}`,(err, result) => {
           if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteByeid:(eid,callback) => {
        connection.query(`DELETE FROM expenserecord WHERE eid=${eid}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updateexpense:(eid,data,callback) => {
        connection.query(`UPDATE expenserecord SET eid='${data.eid}',voucherdate='${data.voucherdate}',expenseshead='${data.expenseshead}',paidto='${data.paidto}',amt='${data.amt}',particulars='${data.particulars}',modeofpay='${data.modeofpay}', WHERE eid='${eid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}