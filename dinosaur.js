const Dinosaur = function (species, dietType, averageVisitors) {
    this.species = species;
    this.diet = ['carnivore', 'herbivore', 'omnivore'];
    this.dietType = this.diet[dietType];
    this.averageVisitors = averageVisitors;
};

module.exports = Dinosaur;