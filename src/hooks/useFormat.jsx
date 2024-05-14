const useFormat = (flightOffer) => {
  let format =
    flightOffer &&
    flightOffer.map((Flight) => {
      let temp = {
        fare: [],
        flight: [],
        aircraft: [],
        departure: [],
        arrival: [],
        route: [],
        class: [],
      };
      console.log(Flight.fareBasis[0][0]);
      temp.price = Flight.price;
      //   temp.fare = [Flight.fareBasis[0][0],Flight.fareBasis[0][1]];
      Flight.fareBasis.forEach((level1) => {
        level1.forEach((level2) => {
          temp.fare.push(level2);
        });
      });
      Flight.class.forEach((level1) => {
        level1.forEach((level2) => {
          temp.class.push(level2);
        });
      });

      Flight?.itineraries.forEach((itinerary) => {
        temp.duration = itinerary.duration;
        itinerary?.segments.forEach((segment) => {
          temp.flight.push(segment.carrierCode + " " + segment.aircraft);
          temp.aircraft.push(segment.flightNumber);
          temp.route.push(
            segment.departure.iataCode + " - " + segment.arrival.iataCode
          );
          temp.departure.push(segment.departure.at);
          temp.arrival.push(segment.arrival.at);
        });
      });
      return temp;
    });
  return format;
};
export default useFormat;
