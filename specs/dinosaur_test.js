const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

let dinosaur;

describe('Dinosaur', function() {
    beforeEach(function(){
        // Arrange
        dinosaur = new Dinosaur('t-rex', 0, 1000);
    });

    it('Should have a species', function(){
        assert.strictEqual('t-rex', dinosaur.species);
    });

    it('Should have a diet type', function(){
        assert.strictEqual('carnivore', dinosaur.dietType);
    });

    it('Should have an average visitors', function(){
        assert.strictEqual(1000, dinosaur.averageVisitors);
    });
});