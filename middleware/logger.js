'use strict';

module.exports=(req,res,next)=>{
    console.log('REQ',req.path,'method'=req.method);
    next()
}