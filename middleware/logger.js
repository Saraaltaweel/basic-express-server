'use strict';

const { beforeEach, afterEach, expect, it } = require('@jest/globals');
const { describe } = require('yargs');
const loggerMiddleware=require('../middleware/');

describe('logger middleware',()=>{
    let consoleSpy;
    const req={};
    const res={};
    const next=jest.fn();

    beforeEach(()=>{
        consoleSpy=jest.spyOn (console,'log').mockImplementation();

    });
    afterEach(()=>{
        consoleSpy.mockRestore();
    });
    it ('logs output correctly',()=>{
        loggerMiddleware(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('moving next middleware')
    loggerMiddleware(req,res,next);
    expect(next).toHaveBeenCalled
})
module.exports=(req,res,next)=>{
    console.log('REQ',req.method,req.path);
    next()
}