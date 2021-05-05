const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

let dinosaur;

describe('Dinosaur', function() {
    beforeEach(function(){
        // Arrange
        dinosaur = new Dinosaur('t-rex', 0, 1000);
    });

    it('Should have a species', function(){
        assert.strictEqual(dinosaur.species, 't-rex');
    });

    it('Should have a diet type', function(){
        assert.strictEqual(dinosaur.dietType, 'carnivore');
    });

    it('Should have an average visitors', function(){
        assert.strictEqual(dinosaur.averageVisitors, 1000);
    });
});