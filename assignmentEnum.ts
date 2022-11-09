console.log('========The direction logged using enum===================');

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  console.log(CardinalDirections.North,CardinalDirections.West,CardinalDirections.South,CardinalDirections.North);
  console.log('========The Country logged using enum===================');
  enum Country {
    India = "India",
    UnitedStates = "United States",
    UnitedKindom = "United Kingdom",
    Australia = "Austrlia",
    Rusia = "Rusia",
    Japan= "Japan"
  };
  console.log(Country.India, Country.UnitedStates,Country.UnitedKindom,Country.Australia,Country.Rusia,Country.Japan);
  console.log('===================================');
  enum networkError {
    one = "200-Good Request",
    two ='400-Bad Request',
    three = '403-Forbidden',
    four = '500-Internal server error'
  }
  console.log(networkError.one);
  console.log(networkError.two);
  console.log(networkError.three);
  console.log(networkError.four);
  
  
  
  
  