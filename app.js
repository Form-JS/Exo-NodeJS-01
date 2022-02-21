const eventDays = require('./modules/event-days');


const christmas = eventDays.fromChristmas();
console.log(`Le nombre de jours avant noel est de : ${christmas}`);

const annif = eventDays.fromBirthdate(24, 4);
console.log(`Le nombre de jours avant l'annif est de : ${annif}`);

const vac = eventDays.fromHolidays();
console.log(`Le nombre de jours avant les vacances est de : ${vac}`);


const solstice = eventDays.fromSolstice();
console.log(`Le nombre de jours avant le Solstice est de : ${solstice}`);