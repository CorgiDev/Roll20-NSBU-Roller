/*******************
ELEMENT VARIABLES 
*******************/
/* Skills - Stunts */
const stuntsHeading = document.getElementById('stunts-heading');
const stuntsDie = document.getElementById('stunts-die');
const stuntsCode = document.getElementById('stunts-code');
const stuntsRollHereButton = document.getElementById('stunts-RollHere');
const stuntsResult = document.getElementById('stunts-result');
/* Skills - Brawl */
const brawlHeading = document.getElementById('brawl-heading');
const brawlDie = document.getElementById('brawl-die');
const brawlCode = document.getElementById('brawl-code');
const brawlRollHereButton = document.getElementById('brawl-RollHere');
const brawlResult = document.getElementById('brawl-result');
/* Skills - Tough */
const toughHeading = document.getElementById('tough-heading');
const toughDie = document.getElementById('tough-die');
const toughCode = document.getElementById('tough-code');
const toughRollHereButton = document.getElementById('tough-RollHere');
const toughResult = document.getElementById('tough-result');
/* Skills - Tech */
const techHeading = document.getElementById('tech-heading');
const techDie = document.getElementById('tech-die');
const techCode = document.getElementById('tech-code');
const techRollHereButton = document.getElementById('tech-RollHere');
const techResult = document.getElementById('tech-result');
/* Skills - Weapons */
const weaponsHeading = document.getElementById('weapons-heading');
const weaponsDie = document.getElementById('weapons-die');
const weaponsCode = document.getElementById('weapons-code');
const weaponsRollHereButton = document.getElementById('weapons-RollHere');
const weaponsResult = document.getElementById('weapons-result');
/* Skills - Drive */
const driveHeading = document.getElementById('drive-heading');
const driveDie = document.getElementById('drive-die');
const driveCode = document.getElementById('drive-code');
const driveRollHereButton = document.getElementById('drive-RollHere');
const driveResult = document.getElementById('drive-result');
/* Skills - Sneak */
const sneakHeading = document.getElementById('sneak-heading');
const sneakDie = document.getElementById('sneak-die');
const sneakCode = document.getElementById('sneak-code');
const sneakRollHereButton = document.getElementById('sneak-RollHere');
const sneakResult = document.getElementById('sneak-result');
/* Skills - Wits */
const witsHeading = document.getElementById('wits-heading');
const witsDie = document.getElementById('wits-die');
const witsCode = document.getElementById('wits-code');
const witsRollHereButton = document.getElementById('wits-RollHere');
const witsResult = document.getElementById('wits-result');
/* Skills - Hot */
const hotHeading = document.getElementById('hot-heading');
const hotDie = document.getElementById('hot-die');
const hotCode = document.getElementById('hot-code');
const hotRollHereButton = document.getElementById('hot-RollHere');
const hotResult = document.getElementById('hot-result');

/****************
EVENT LISTENERS
****************/
/* Skills - Stunts */
stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDie.value, stuntsCode.id));
myButton.addEventListener('click', handleClick.bind(null, 'Hello from bind!'));
myButton.addEventListener('click', handleClick.bind(null, 'Hello from bind!'));
/* Skills - Brawl */
/* Skills - Tough */
/* Skills - Tech */
/* Skills - Weapons */
/* Skills - Drive */
/* Skills - Sneak */
/* Skills - Wits */
/* Skills - Hot */

/* Passing variables to event listeners */