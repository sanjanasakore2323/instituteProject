const connection=require('./connection');


module.exports ={

    getAllinquiry:(callback) => {
     connection.query(`SELECT * FROM inquiry`,(err, result)=>{
         if(err){
         console.log(err); 
        }
         else{
             callback(result);
         }
     })
    },
    getByid:(id,callback) => {
        connection.query(`SELECT id,firstname,lastname,inquirydate,inquirydetails,contactno,address,area,landmark FROM inquiry WHERE gid=${gid}`,(err, result)=>{
            if(err){
            console.log(err);
           }
            else{
                callback(result);
            }
        })
       },
    
       addNewinquiry:(data,callback) => {
        connection.query(`INSERT INTO inquiry(id,firstname,lastname,inquirydate,inquirydetails,contactno,address,area,landmark) VALUES ('${data.id}','${data.firstname}','${data.lastname}','${data.inquirydate}','${data.inquirydetails}','${data.contactno}','${data.landmark})`,(err, result) => {
           
          if(err){
             console.log(err);
            }else{
                callback(result);  
            }
        })
    },    
    deleteByid:(id,callback) => {
        connection.query(`DELETE FROM inquiry WHERE id=${id}`,(err, result) => {
            if(err){
                console.log(err);
            }else{
                callback(result);  
            }
        })
    },     
    updateinquiry:(id,data,callback) => {
        connection.query(`UPDATE inquiry SET id='${data.id}',firstname='${data.fristname}',lastname='${data.lastname}',inquirydate='${data.inquirydate}',inquirydetails='${data.inquirydetails}',contactno='${data.contactno}',address='${data.address}', WHERE gid='${gid}'`,(err, result) => {
            if(err){
                console.log(err);
            
            }else{
                callback(result);  
            }
        })
    },
}