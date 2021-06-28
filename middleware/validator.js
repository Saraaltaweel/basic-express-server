'use strict';

module.exports=(req,res,next)=>{
    if (req.query.name){
        next()
    }
    if (req.query.name=== ''){
        next('inter the name')
    }
};