// Two players draw a pair of numbered cards so that both players can form a 2 digit number. A winner can be decided if 
// one player's number is larger than the other.

// However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in 
// a gamble to get a higher number! Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you 
// cannot swap them to get 91.

// Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul 
// winning the round.

    // n1 is Paul's number
    // n2 is his opponent's number

// Worked Example
  // swap_cards(41, 79) ➞ true
  // Paul's lowest number is 1
  // The opponent's ten's digit is 7
  // After the swap: 47 > 19
  // Paul wins the round

// Examples
  // swapCards(41, 98) ➞ true
  // swapCards(12, 28) ➞ true
  // swapCards(67, 53) ➞ false
  // swapCards(77, 54) ➞ false

// Notes
  //   If both of Paul's digits are the same, swap the ten's digit with the opponent's (paul likes to live riskily).
  //   The cards don't include the number 0.

  function swapCards(n1, n2){
    let paul = [String(n1).slice(0,1), String(n1).slice(1)];
    let opponent = [String(n2).slice(0,1), String(n2).slice(1)];
    let lowest;
    if (paul[0] <= paul[1]){
      lowest = paul[0];
      paul[0] = opponent[0];
      opponent[0] = lowest;
    } else {
      lowest = paul[0];
      paul[1] = opponent[0];
      opponent[0] = lowest;
    };
    paul = paul.join('');
    opponent = opponent.join('');
    return Number(paul) > Number(opponent);
  };

  console.log(swapCards(41, 98));
  console.log(swapCards(12, 28));
  console.log(swapCards(67, 53));
  console.log(swapCards(77, 54));