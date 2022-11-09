console.log('========The direction logged using enum===================');
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
console.log(CardinalDirections.North, CardinalDirections.West, CardinalDirections.South, CardinalDirections.North);
console.log('========The Country logged using enum===================');
var Country;
(function (Country) {
    Country["India"] = "India";
    Country["UnitedStates"] = "United States";
    Country["UnitedKindom"] = "United Kingdom";
    Country["Australia"] = "Austrlia";
    Country["Rusia"] = "Rusia";
    Country["Japan"] = "Japan";
})(Country || (Country = {}));
;
console.log(Country.India, Country.UnitedStates, Country.UnitedKindom, Country.Australia, Country.Rusia, Country.Japan);
console.log('===================================');
var networkError;
(function (networkError) {
    networkError["one"] = "200-Good Request";
    networkError["two"] = "400-Bad Request";
    networkError["three"] = "403-Forbidden";
    networkError["four"] = "500-Internal server error";
})(networkError || (networkError = {}));
console.log(networkError.one);
console.log(networkError.two);
console.log(networkError.three);
console.log(networkError.four);
