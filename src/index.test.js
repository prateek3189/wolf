import {expect} from 'chai';
import jsdom from "jsdom";
import fs from "fs";

describe('Our first Test', () => {
    it("Should Pass", () => {
        expect(true).to.equal(true);
    });
});

describe("index.html", () => {
    it("Should Say Wolf Position", (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Wolf is Here");
            expect(1).to.equal(1);
            done();
            window.close();
        })
    });
});