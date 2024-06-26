import { describe, assert, expect, it } from "vitest";

function sayHello(name:string):string{
    return `Hello ${name}`
}

describe('',()=>{
    it('should return with name', ()=>{
        expect(sayHello('Test')).to.be.a('string', 'Hello Test');
        assert.equal(sayHello('Test'), 'Hello Test')
    })
})

