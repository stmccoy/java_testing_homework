const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;

describe('Park', function(){
    beforeEach(function(){
        park = new Park('Jurassic Park', 20);
        dinosaur1 = new Dinosaur('t-rex', 0, 1000);
        dinosaur2 = new Dinosaur('godzilla', 0, 500);
        dinosaur3 = new Dinosaur('barney', 1, 100);
    });

    it('should have a name', function(){
        assert.strictEqual('Jurassic Park', park.name);
    });

    it('should have a ticket price', function(){
        assert.strictEqual(20, park.ticketPrice);
    });

    it('should have a dinosaur stock', function(){
        assert.strictEqual(0, park.dinosaurStock.length);
    });

    it('should be able to add a dinosaur to it\'s stock', function(){
        assert.strictEqual(0, park.dinosaurStock.length);    
        park.addDinosaur(dinosaur1);
        assert.strictEqual(1, park.dinosaurStock.length); 
        assert.deepStrictEqual(dinosaur1, park.dinosaurStock[0]);      
    });

    it('Should be able to remove a dinosaur from its collection', function (){
        park.addDinosaur(dinosaur1);
        assert.strictEqual(1, park.dinosaurStock.length); 
        park.removeDinosaur(dinosaur1);
        assert.strictEqual(0, park.dinosaurStock.length); 
    });

    it('Should be able to find all dinosaurs of a particular species', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        assert.strictEqual(3, park.dinosaurStock.length); 
        const trexStock = park.findDinos('t-rex');
        assert.strictEqual(1, trexStock.length); 
        assert.deepStrictEqual(dinosaur1, trexStock[0]); 
    });

    it('Should be able to calculate total number of visitors daily', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        assert.strictEqual(1600, park.totalDailyVisitors());
    });


    it('Should be able to calculate total number of visitors yearly', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        assert.strictEqual(584000, park.totalYearlyVisitors());
    });

    it('Should be able to calculate total ticket sales for the year', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        assert.strictEqual(11680000, park.totalYearlyTicketSales());        
    });
});

