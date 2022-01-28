'use strict';

// #1

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretza',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandoski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const players1 = game.players[0];
const players2 = game.players[1];

//course answer:
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// 2.
// const gk1 = players1[0];
// const gk2 = players2[0];

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1, gk2);
// console.log(fieldPlayers1, fieldPlayers2);

// 3.
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5.
const team1 = {
  name: game.team1,
  odds: game.odds.team1,
};
const draw = game.odds.x;
const team2 = {
  name: game.team2,
  odds: game.odds.team2,
};

//course answer:
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  console.log(...players);
};

printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
const winner =
  team1.odds > team2.odds
    ? console.log(`Team 2 is more likely to win`)
    : console.log(`Team 1 is more likely to win`);

//course answer:
team1.odds < team2.odds && console.log('Team 1 is more likely to win');
team1.odds > team2.odds && console.log('Team 2 is more likely to win');
*/

// #2
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretza',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
// average = average / odds.length;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// bonus.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
//or:
let scorers = {};
let bucket = [];
let players = game.scored;

for (const player of players) {
  if (bucket.includes(player)) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
    bucket.push(player);
  }
}
console.log(scorers);
*/

// #3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const eventsSet = new Set();
for (const [minutes, events] of gameEvents) {
  eventsSet.add(events);
}
const event = [...eventsSet];
console.log(event); //(4) ['⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card']

// course answer:
const events = [...new Set(gameEvents.values())];
console.log(events); //(4) ['⚽ GOAL', '🔁 Substitution', '🔶 Yellow card', '🔴 Red card']

// 2.
gameEvents.delete(64);
console.log(gameEvents); //Map(10) {17 => '⚽ GOAL', 36 => '🔁 Substitution', 47 => '⚽ GOAL', 61 => '🔁 Substitution', 69 => '🔴 Red card', …}

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
); //An event happened, on average, every 9 minutes

//counting with the actual minutes of the game > 92:
const time = [...gameEvents.keys()].pop();
console.log(time); //92
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
); //An event happened, on average, every 9.2 minutes

// 4.
for (const [minutes, events] of gameEvents) {
  const half = minutes < 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`${half} ${minutes}: ${events}`);
}

//yay i did this one all by myself :) really fun
*/

// #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const input = document.querySelector('textarea').value;
  const rows = input.split('\n');

  for (const [i, inputNames] of rows.entries()) {
    const newNames = inputNames.replaceAll('_', ' ');
    const lowerNames = newNames.toLowerCase();

    // lowerNames.trim(); is a much better way of doing:
    let fixFirstName;
    if (lowerNames.startsWith(' ')) {
      fixFirstName = lowerNames.replace(' ', '');
    } else {
      fixFirstName = lowerNames;
    }

    const [firstWord, secondWord] = fixFirstName.split(' ');
    const camelCase =
      firstWord +
      secondWord.replace(secondWord[0], secondWord[0].toUpperCase());
    console.log(camelCase.padEnd(18) + '✅'.repeat(i + 1));
  }

  /*
  //course answer
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(${output.padEnd(20)}${'✅'.repeat(i + 1)});
  }
  */
});

//test data
// underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

//the output:
// underscoreCase    ✅
// firstName         ✅✅
// someVariable      ✅✅✅
// calculateAge      ✅✅✅✅
// delayedDeparture  ✅✅✅✅✅
