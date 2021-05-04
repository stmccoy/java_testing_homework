const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurStock = [];
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurStock.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dino){
    let dinosaurIndexNumber = 0;
    for (let dinosaur of this.dinosaurStock){
        if (dinosaur === dino){
            break
        }else{
            dinosaurIndexNumber ++;
        }
    }
    this.dinosaurStock.splice(dinosaurIndexNumber, 1);
}

Park.prototype.findDinos = function(dinoSpecies){
    let dinoList = []
    for (let dinosaur of this.dinosaurStock){
        if (dinosaur.species === dinoSpecies){
            dinoList.push(dinosaur)
        }
    }
    return dinoList;
};

Park.prototype.totalDailyVisitors = function(){
    let totalDailyVisitors = 0;
    for (let dinosaur of this.dinosaurStock){
        totalDailyVisitors += dinosaur.averageVisitors;
    };
    return totalDailyVisitors;
};


Park.prototype.totalYearlyVisitors = function(ParkTotalDailyVisitors){
    let totalYearlyVisitors = ParkTotalDailyVisitors * 365;
    return totalYearlyVisitors
};

Park.prototype.totalYearlyTicketSales = function(ParkTotalYearlyVisitors){
    let totalYearlyTicketSales = ParkTotalYearlyVisitors * this.ticketPrice;
    return totalYearlyTicketSales;
};



// prior to edit returned this.dinosaurstock not iterable
// Park.prototype.totalYearlyVisitors = function(){
//     let totalDailyVisitors = 0;
//     for (let dinosaur of this.dinosaurStock){
//         totalDailyVisitors += dinosaur.averageVisitors;
//     };
//     return totalDailyVisitors * 365;
// };

// Park.prototype.totalYearlyTicketSales = function(){
//     let totalDailyVisitors = 0;
//     for (let dinosaur of this.dinosaurStock){
//         totalDailyVisitors += dinosaur.averageVisitors;
//     };
//     let totalVisitors = totalDailyVisitors * 365;
//     return totalVisitors * 20;
// };



module.exports = Park