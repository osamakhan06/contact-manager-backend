const constant = require ("../constant")


const errorHandler = (err,req,res)=>{
    const statusCode = res.statusCode?res.statusCode:500
    
    switch(statusCode){
        case constant.VALIDATION_ERROR:
            res.json({title:"not found",message:err.message,stackTrace:err.stack})

        break;
        case constant.NOT_FOUND:
    res.json({title:"NOT FOUND",message:err.message,stackTrace:err.stack})
     break;
        case constant.FORBIDDEN:
    res.json({title:"FORBIDDEN ERROR",message:err.message,stackTrace:err.stack})

     break;
        case constant.UNAUTHORIZED:
    res.json({title:"UNOTHERIZED",message:err.message,stackTrace:err.stack})
    
     break;
        case constant.SERVER_ERROR:
    res.json({title:"SERVER ERROR",message:err.message,stackTrace:err.stack})
     default:
        console.log("no error all were good")
       

    }

    



}

module.exports = errorHandler