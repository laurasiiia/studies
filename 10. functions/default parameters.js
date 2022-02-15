'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //the method
  //ES5 way:
  //   numPassengers = numPassengers || 1; //is numPassangers falsy value (undefined)? then the result will be 1
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{flightNum: 'LH123', numPassengers: 1, price: 199} > since we didnt specify the 'numPassengers' or 'price', they are defined in the default values
createBooking('LH123', 2, 800); //{flightNum: 'LH123', numPassengers: 2, price: 800}
createBooking('LH123', 2); //{flightNum: 'LH123', numPassengers: 2, price: 398}
createBooking('LH123', 5); //{flightNum: 'LH123', numPassengers: 5, price: 995}
//the price are now dinamically calculated by default. this only works for parameters that are defined in the list before this, so it couldnt be "price = 199 * numPassengers, numPassengers = 1". it has to be defined beforehand

//other thing is that we cannot skip the parameters in the functions, for exemple, leaving the 'numPassengers' by default but then specify the price:
createBooking('LH123', 1000); //{flightNum: 'LH123', numPassengers: 1000, price: 199000}
//this second value will ALWAYS specify the second paramenter, therefore the 'numPassagers'. so a nice trick is to set the unwanted parameter: 'undefined':
createBooking('LH123', undefined, 1000); //{flightNum: 'LH123', numPassengers: 1, price: 1000}
