'use strict';

module.exports=(req,res,next)=>{
  let name=req.query.name;
  if(name){
      next();
  }
  else{
      next('invalid name input');
  }
}