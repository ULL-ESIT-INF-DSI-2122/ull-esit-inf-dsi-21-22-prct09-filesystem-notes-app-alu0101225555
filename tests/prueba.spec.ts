import "mocha";
import {expect} from "chai";
import {add} from "../src/prueba";

let myConst = 7;

it('Function add', () => {
    expect(add(1, myConst)).to.be.eql(8);
});