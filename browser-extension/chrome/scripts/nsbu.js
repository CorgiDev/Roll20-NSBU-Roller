// Rolls a die of provided number of sides
function RollDice(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    return roll;
}

// Updates the Roll20 Text in the code block
function UpdateCopyText(skillName,skillValue,skillCodeDiv) {
    const skillDiv = document.getElementById(skillCodeDiv)
    if (skillValue ==0){
        skillCodeDiv.textContent = "Skill currently does not have a valid value set.";
    } else {
        let skillText="/me Rolled a " + skillName + " roll (1d"+skillValue + ") [[1d" + skillValue + "]]";
        skillCodeDiv.textContent = skillText;
    }
}

// Rolls the dice in the window.
function RollSkillHere(dieSides, skillResultDiv){
    if (dieSides == 0) {
        const div = document.getElementById(skillResultDiv)
        div.textContent = "Unable to roll until die value is set.";
    } else {
        const roll = RollDice(dieSides);
        const div = document.getElementById(skillResultDiv)
        div.textContent = roll;
    }
}

// Sends provided text to the Roll20 chat window and sends the message.
function Roll20Chat(chatArray) {
    document.querySelector("textarea").innerHTML = text;
}

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

/* function CopyText (paraID) {
      // Get the text field
    var copyText = document.getElementById(paraID);
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
} */

/*******************
ELEMENT VARIABLES 
*******************/
/* Skills - Stunts */
    const stuntsHeading = document.getElementById('stunts-heading');
    const stuntsDie = document.getElementById('stunts-die');
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
    /* stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
    stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
    stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id)); */
/* Skills - Tough */
    /* stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
    stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
    stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id)); */
/* Skills - Tech */
    /* stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
    stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
    stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id)); */
/* Skills - Weapons */
    /* stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
    stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
    stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id)); */
/* Skills - Drive */
    /* stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
    stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
    stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id)); */
/* Skills - Sneak */
    /* stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
    stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
    stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id)); */
/* Skills - Wits */
    /* stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
    stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
    stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id)); */
/* Skills - Hot */
    /* stuntsDie.addEventListener('change', UpdateCopyText.bind("Stunts", stuntsDieValue, "stunts-code"));
    stuntsRollHereButton.addEventListener('click', RollSkillHere.bind(stuntsDie.value, stuntsResult.id));
    stuntsRollCode.addEventListener('click', CopyToClipboard.bind(stuntsCode.id)); */