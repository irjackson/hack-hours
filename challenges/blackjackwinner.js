// Blackjack is a popular card game played in casinos, where each player holds two different cards at hand and winner is declared based on
// these rules:

// 1. The goal is to get as close to 21 without going over.
// 2. The player closer to 21 wins the game
// 3. If a player goes over 21, they lose immediately.
// 4. If both players have the same score, it's a draw.

function blackjackWinner(player1, player2){
  let player1Total = player1[0] + player1[1];
  let player2Total = player2[0] + player2[1];
  if (player1Total > 21){
    return 'Player2';
  };
  if (player2Total > 21){
    return 'Player1';
  };
  if (player1Total > player2Total){
    return 'Player1';
  }
  else if (player2Total > player1Total){
    return 'Player2';
  }
  else if (player1Total === player2Total){
    return 'Draw';
  };
};

console.log(blackjackWinner([10,9], [8,7]));
console.log(blackjackWinner([1,5], [9,9]));
console.log(blackjackWinner([5,5], [2,8]));