'use strict';

angular.module('Commit.services')
  .value('valueService', {
    retrievePrice: retrievePrice
  });

  function retrievePrice(minutesRead) {
    var price = null;

    switch(true) {
      case(minutesRead >= 5000):
        price = "Ferrari Car";
        break;
      case(minutesRead >= 2000):
        price = "Mini Cooper";
        break;
      default:
        price = "Getting Started";
    }
    return price;
  }
