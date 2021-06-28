'use strict';

const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const validator=require('../middleware/validator');

describe('validator',()=>{
    it('return query name',()=>{
        let req={
            query:{
                name:'sara',
            },
        };
        let res ={};
        let next =jest.fn();
        validator(req,res,next);
        expect(next).toHaveBeenCalled();

 
});
it ('handeling no query',()=>{
    let req={
        query:{
            name:'',
        },
    };
    let res ={};
    let next =jest.fn();
    validator(req,res,next);
    expect(next).toHaveBeenCalled('query name invalied');
});
});