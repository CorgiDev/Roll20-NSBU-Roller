/***********
FUNCTIONS
***********/

// Rolls a die of provided number of sides
function RollDice(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    return roll;
}

// Updates the Roll20 Text in the code block
function UpdateCopyText(skillName,skillValueDiv,skillCodeDiv) {
    const skillDiv = document.getElementById(skillCodeDiv);
    const skillValue = (document.getElementById(skillValueDiv)).value;
    if (skillValue ==0){
        skillDiv.innerText = "Skill currently does not have a valid value set.";
    } else {
        let skillText="/me Rolled a " + skillName + " roll (1d"+skillValue + ") [[1d" + skillValue + "]]";
        skillDiv.innerText = skillText;
    }
}

// Rolls the dice in the window.
function RollSkillHere(dieSidesDiv, skillResultDiv){
    const dieSides = (document.getElementById(dieSidesDiv)).value;
    const skillDiv = document.getElementById(skillResultDiv);
    if (dieSides == 0) {
        div.textContent = "Unable to roll until die value is set.";
    } else {
        const roll = RollDice(dieSides);
        skillDiv.textContent = roll;
    }
}

// Sends provided text to the Roll20 chat window and sends the message.
/*
    function Roll20Chat(chatArray) {
        document.querySelector("textarea").innerHTML = text;
    }
*/

function CopyToClipboard(containerid) {
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }

    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        document.execCommand("copy");
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
}

/*******************
ELEMENT VARIABLES 
*******************/
/* Skills - Stunts */
const stuntsDie = document.getElementById('stunts-die');
const stuntsRollCode = document.getElementById('stunts-RollCode');
const stuntsRollHere = document.getElementById('stunts-RollHere');
/* Skills - Brawl */
const brawlDie = document.getElementById('brawl-die');
const brawlRollCode = document.getElementById('brawl-RollCode');
const brawlRollHere = document.getElementById('brawl-RollHere');
/* Skills - Tough */
const toughDie = document.getElementById('tough-die');
const toughRollCode = document.getElementById('tough-RollCode');
const toughRollHere = document.getElementById('tough-RollHere');
/* Skills - Tech */
const techDie = document.getElementById('tech-die');
const techRollCode = document.getElementById('tech-RollCode');
const techRollHere = document.getElementById('tech-RollHere');
/* Skills - Weapons */
const weaponsDie = document.getElementById('weapons-die');
const weaponsRollCode = document.getElementById('weapons-RollCode');
const weaponsRollHere = document.getElementById('weapons-RollHere');
/* Skills - Drive */
const driveDie = document.getElementById('drive-die');
const driveRollCode = document.getElementById('drive-RollCode');
const driveRollHere = document.getElementById('drive-RollHere');
/* Skills - Sneak */
const sneakDie = document.getElementById('sneak-die');
const sneakRollCode = document.getElementById('sneak-RollCode');
const sneakRollHere = document.getElementById('sneak-RollHere');
/* Skills - Wits */
const witsDie = document.getElementById('wits-die');
const witsRollCode = document.getElementById('wits-RollCode');
const witsRollHere = document.getElementById('wits-RollHere');
/* Skills - Hot */
const hotDie = document.getElementById('hot-die');
const hotRollCode = document.getElementById('hot-RollCode');
const hotRollHere = document.getElementById('hot-RollHere');

/****************
EVENT LISTENERS
****************/
/* Skills - Stunts */
    stuntsDie.addEventListener("change", () => UpdateCopyText("Stunts", "stunts-die", "stunts-code"));
    stuntsRollHere.addEventListener("click", () => RollSkillHere("stunts-die", "stunts-result"));
    stuntsRollCode.addEventListener("click", () => CopyToClipboard("stunts-code"));
/* Skills - Brawl */
    brawlDie.addEventListener("change", () => UpdateCopyText("Brawl", "brawl-die", "brawl-code"));
    brawlRollHere.addEventListener("click", () => RollSkillHere("brawl-die", "brawl-result"));
    brawlRollCode.addEventListener("click", () => CopyToClipboard("brawl-code"));
/* Skills - Tough */
    toughDie.addEventListener("change", () => UpdateCopyText("Tough", "tough-die", "tough-code"));
    toughRollHere.addEventListener("click", () => RollSkillHere("tough-die", "tough-result"));
    toughRollCode.addEventListener("click", () => CopyToClipboard("tough-code"));
/* Skills - Tech */
    techDie.addEventListener("change", () => UpdateCopyText("Tech", "tech-die", "tech-code"));
    techRollHere.addEventListener("click", () => RollSkillHere("tech-die", "tech-result"));
    techRollCode.addEventListener("click", () => CopyToClipboard("tech-code"));
/* Skills - Weapons */
    weaponsDie.addEventListener("change", () => UpdateCopyText("Weapons", "weapons-die", "weapons-code"));
    weaponsRollHere.addEventListener("click", () => RollSkillHere("weapons-die", "weapons-result"));
    weaponsRollCode.addEventListener("click", () => CopyToClipboard("weapons-code"));
/* Skills - Drive */
    driveDie.addEventListener("change", () => UpdateCopyText("Drive", "drive-die", "drive-code"));
    driveRollHere.addEventListener("click", () => RollSkillHere("drive-die", "drive-result"));
    driveRollCode.addEventListener("click", () => CopyToClipboard("drive-code"));
/* Skills - Sneak */
    sneakDie.addEventListener("change", () => UpdateCopyText("Sneak", "sneak-die", "sneak-code"));
    sneakRollHere.addEventListener("click", () => RollSkillHere("sneak-die", "sneak-result"));
    sneakRollCode.addEventListener("click", () => CopyToClipboard("sneak-code"));
/* Skills - Wits */
    witsDie.addEventListener("change", () => UpdateCopyText("Wits", "wits-die", "wits-code"));
    witsRollHere.addEventListener("click", () => RollSkillHere("wits-die", "wits-result"));
    witsRollCode.addEventListener("click", () => CopyToClipboard("wits-code"));
/* Skills - Hot */
    hotDie.addEventListener("change", () => UpdateCopyText("Hot", "hot-die", "hot-code"));
    hotRollHere.addEventListener("click", () => RollSkillHere("hot-die", "hot-result"));
    hotRollCode.addEventListener("click", () => CopyToClipboard("hot-code"));