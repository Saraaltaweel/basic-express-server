'use strict';
const server = require('../src/server');
const supertest=require('supertest');
const { describe } = require('yargs');
const { it, expect } = require('@jest/globals');

const mockRequest=supertest(server.app);

describe('API server',()=>{
    it('404 bad route',async()=>{
        let route ='/foo';
        const response = await nockRequest.get(route);
        expect(response.status).toBe(404);
    });

    it('404 bad route',async()=>{
        let route ='/foo';
        const response = await nockRequest.post(route);
        expect(response.status).toBe(404);
    });

    it('500 no name in query',async()=>{
        let route ='/person?name=';
        const response = await nockRequest.get(route);
        expect(response.status).toBe(500);
    });

    it('200 start in the query',async()=>{
        let route ='/person?name=sara';
        const response = await nockRequest.get(route);
        let persedData=JSON.parse(response.text);
        expect(response.status).toBe(200);
        expect(persedData).toEqual({
            name:'sara',
        });
    });

    it('200 start in the query',async()=>{
        let route ='/';
        const response = await nockRequest.get(route);
        let persedData=JSON.parse(response.text);
        expect(response.status).toBe(200);
        expect(response.text).toEqual('hello all')
            
        });
    });