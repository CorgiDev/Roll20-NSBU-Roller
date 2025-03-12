/*******************
ELEMENT VARIABLES 
*******************/
/* Skills - Stunts */
    const stuntsHeading = document.getElementById('stunts-heading');
    const stuntsDie = document.getElementById('stunts-die');
        let stuntsDieValue = stuntsDie.value;
    const stuntsCode = document.getElementById('stunts-code');
    const stuntsRollCode = document.getElementById('stunts-RollCode');
    const stuntsRollHereButton = document.getElementById('stunts-RollHere');
    const stuntsResult = document.getElementById('stunts-result');
/* Skills - Brawl */
    const brawlDie = document.getElementById('brawl-die');
    const brawlCode = document.getElementById('brawl-code');
    const brawlRollCode = document.getElementById('brawl-RollCode');
    const brawlRollHereButton = document.getElementById('brawl-RollHere');
    const brawlResult = document.getElementById('brawl-result');
/* Skills - Tough */
    const toughDie = document.getElementById('tough-die');
    const toughCode = document.getElementById('tough-code');
    const toughRollCode = document.getElementById('tough-RollCode');
    const toughRollHereButton = document.getElementById('tough-RollHere');
    const toughResult = document.getElementById('tough-result');
/* Skills - Tech */
    const techDie = document.getElementById('tech-die');
    const techCode = document.getElementById('tech-code');
    const techRollCode = document.getElementById('tech-RollCode');
    const techRollHereButton = document.getElementById('tech-RollHere');
    const techResult = document.getElementById('tech-result');
/* Skills - Weapons */
    const weaponsDie = document.getElementById('weapons-die');
    const weaponsCode = document.getElementById('weapons-code');
    const weaponsRollCode = document.getElementById('weapons-RollCode');
    const weaponsRollHereButton = document.getElementById('weapons-RollHere');
    const weaponsResult = document.getElementById('weapons-result');
/* Skills - Drive */
    const driveDie = document.getElementById('drive-die');
    const driveCode = document.getElementById('drive-code');
    const driveRollCode = document.getElementById('drive-RollCode');
    const driveRollHereButton = document.getElementById('drive-RollHere');
    const driveResult = document.getElementById('drive-result');
/* Skills - Sneak */
    const sneakDie = document.getElementById('sneak-die');
    const sneakCode = document.getElementById('sneak-code');
    const sneakRollCode = document.getElementById('sneak-RollCode');
    const sneakRollHereButton = document.getElementById('sneak-RollHere');
    const sneakResult = document.getElementById('sneak-result');
/* Skills - Wits */
    const witsDie = document.getElementById('wits-die');
    const witsCode = document.getElementById('wits-code');
    const witsRollCode = document.getElementById('wits-RollCode');
    const witsRollHereButton = document.getElementById('wits-RollHere');
    const witsResult = document.getElementById('wits-result');
/* Skills - Hot */
    const hotDie = document.getElementById('hot-die');
    const hotCode = document.getElementById('hot-code');
    const hotRollCode = document.getElementById('hot-RollCode');
    const hotRollHereButton = document.getElementById('hot-RollHere');
    const hotResult = document.getElementById('hot-result');

/****************
EVENT LISTENERS
****************/
/* Skills - Stunts */
stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id));
/* Skills - Brawl */
/* Skills - Tough */
/* Skills - Tech */
/* Skills - Weapons */
/* Skills - Drive */
/* Skills - Sneak */
/* Skills - Wits */
/* Skills - Hot */