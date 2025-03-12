// Rolls a die of provided number of sides
function RollDice(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    return roll;
}

// Updates the Roll20 Text in the code block
function UpdateCopyText(skillName,skillValue,skillCodeDiv) {
    const skilldiv = document.getElementById(skillCodeDiv)
    if (skillValue ==0){
        skilldiv.textContent = "Skill currently does not have a valid value set.";
    } else {
        let skillText="/me Rolled a " + skillName + " roll (1d"+skillValue + ") [[1d" + skillValue + "]]";
        skilldiv.textContent = skillText;
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

// Allows the text to be copied to the clipboard
function CopyText (paraID) {
      // Get the text field
    var copyText = document.getElementById(paraID);
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

// Sends provided text to the Roll20 chat window and sends the message.
function Roll20Chat(chatArray) {
    document.querySelector("textarea").innerHTML = text;
}