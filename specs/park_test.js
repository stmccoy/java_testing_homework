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
        assert.strictEqual(park.name, 'Jurassic Park');
    });

    it('should have a ticket price', function(){
        assert.strictEqual(park.ticketPrice, 20);
    });

    it('should have a dinosaur stock', function(){
        assert.strictEqual(park.dinosaurStock.length, 0);
    });

    it('should be able to add a dinosaur to it\'s stock', function(){
        assert.strictEqual(0, park.dinosaurStock.length);    
        park.addDinosaur(dinosaur1);
        assert.strictEqual(1, park.dinosaurStock.length); 
        assert.deepStrictEqual(park.dinosaurStock[0], dinosaur1);      
    });

    it('Should be able to remove a dinosaur from its collection', function (){
        park.addDinosaur(dinosaur1);
        assert.strictEqual(park.dinosaurStock.length, 1); 
        park.removeDinosaur(dinosaur1);
        assert.strictEqual(park.dinosaurStock.length, 0); 
    });

    it('Should be able to find all dinosaurs of a particular species', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        assert.strictEqual(park.dinosaurStock.length, 3); 
        const trexStock = park.findDinos('t-rex');
        assert.strictEqual(1, trexStock.length); 
        assert.deepStrictEqual(trexStock[0], dinosaur1); 
    });

    it('Should be able to calculate total number of visitors daily', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        assert.strictEqual(park.totalDailyVisitors(), 1600);
    });


    it('Should be able to calculate total number of visitors yearly', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        assert.strictEqual(park.totalYearlyVisitors(), 584000);
    });

    it('Should be able to calculate total ticket sales for the year', function(){
        park.addDinosaur(dinosaur1);
        park.addDinosaur(dinosaur2);
        park.addDinosaur(dinosaur3);
        assert.strictEqual(park.totalYearlyTicketSales(), 11680000);        
    });
});

