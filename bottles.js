

function initBuy(cash) {
  var bottles =  Math.floor(cash / 2);
  var curr = bottles;
  var recycledCaps = 0;
  var recycledBottle = 0;
  var currBot = 0;
  var currCaps = 0;

  while ( curr > 1)
  {
    currBot = bottlesForPop(curr);
    currCaps = capsForPop(curr);
    recycledCaps += currCaps;
    recycledBottle += currBot;
    curr = (currCaps + currBot);
  }
  var recycled = recycledBottle + recycledCaps;
  console.log("TOTAL BOTTLES: ", recycled + bottles);
  console.log("TOTAL EARNED:\nTOTAL BOTTLES:", recycledBottle, "\nTOTAL CAPS", recycledCaps);
  return;
}


function bottlesForPop(numb) {
  return Math.floor(numb / 2);
}

function capsForPop(numb) {
  return Math.floor(numb / 4);
}


initBuy(20);