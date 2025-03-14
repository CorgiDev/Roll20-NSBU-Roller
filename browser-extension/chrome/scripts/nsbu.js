// Variables that are not dependent on page or extension load status
let currentURL ="";
let currentTabID ="";
const ROLL20_ORIGIN = 'https://app.roll20.net/editor/';

// Rolls a die of provided number of sides
function RollDice(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    return roll;
}

// Updates the Roll20 Text in the code block
function UpdateCopyText(skillName,skillValueDiv,skillCodeDiv) {
    let skillMsgName = (skillName.toLowerCase()) + "Msg";
    const skillDiv = document.getElementById(skillCodeDiv);
    const skillValue = (document.getElementById(skillValueDiv)).value;
    if (skillValue ==0){
        skillDiv.innerText = "Skill currently does not have a valid value set.";
    } else {
        let skillText="/me Rolled a " + skillName + " roll (1d"+skillValue + ") [[1d" + skillValue + "]]";
        skillDiv.innerText = skillText;
        skillMsgName = skillText;
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

function PasteFromClipboard(msgDiv) {
    if (msgDiv == "textarea"){
        navigator.clipboard.readText().then(text => {document.querySelector("textarea").innerText = text;})
        .catch(err => {document.querySelector("textarea").innerText = 'Failed to read clipboard contents: '+err;});
    } else {
        navigator.clipboard.readText().then(text => {document.getElementById("msgDiv").innerHTML = text;})
        .catch(err => {document.getElementById("msgDiv").innerHTML = 'Failed to read clipboard contents: '+err;});
    }
};

// ROLL20 CHAT FUNCTIONS
function GetRoll20TabID(){
    let currentTabID=0;
    chrome.tabs.query({url: ROLL20_ORIGIN}, (tabs) => {currentTabID = tabs[0].value;});
    return currentTabID;
};

function Roll20TabFocus (tabID) {
    var updateProperties = {'active': true};
    chrome.tabs.update(tabID, updateProperties, (tab) => { });
};

function GetSkillMsg(skillMsgDiv){
    let skillMsg = document.getElementById(skillMsgDiv).innerText;
    return skillMsg;
};

function GetSkillValue(skillValueDiv){
    let skillValue = document.getElementById(skillValueDiv).value;
    return skillValue;
}

// Sends provided text to the Roll20 chat window and sends the message.
function Roll20Send(skillName, skillMsgDiv, skillValueDiv) {
    let skillValue = GetSkillValue(skillValueDiv);
    CopyToClipboard(skillMsgDiv);
    if (skillValue == 0) {
        alert(skillName + " currently does not have the dice value set. Please set the dice value and try again.");
    } else if (skillValue > 0) {
        let currentId=GetRoll20TabID();
        Roll20TabFocus(currentId);
        chrome.scripting.executeScript({
            target: {tabId: currentId},
            func: PasteFromClipboard("textarea")
        });
        // Possibly add line that submits the message in chat.
    }
};

/*
    // Gets the URL of the active tab
    chrome.tabs.onActivated.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const newURL = currentTab.url;
        const newID = currentTab.id;
        currentURL = newURL;
        currentTabID = newID;
        });
    });
  */

/*******************
ELEMENT VARIABLES 
*******************/
/* Skills - Stunts */
    const stuntsDie = document.getElementById('stunts-die');
    const stuntsRollCode = document.getElementById('stunts-RollCode');
    const stuntsRollHere = document.getElementById('stunts-RollHere');
    const stuntsRoll20Btn = document.getElementById('stunts-Roll20');

/* Skills - Brawl */
    const brawlDie = document.getElementById('brawl-die');
    const brawlRollCode = document.getElementById('brawl-RollCode');
    const brawlRollHere = document.getElementById('brawl-RollHere');
    const brawlRoll20Btn = document.getElementById('brawl-Roll20');

/* Skills - Tough */
    const toughDie = document.getElementById('tough-die');
    const toughRollCode = document.getElementById('tough-RollCode');
    const toughRollHere = document.getElementById('tough-RollHere');
    const toughRoll20Btn = document.getElementById('tough-Roll20');

/* Skills - Tech */
    const techDie = document.getElementById('tech-die');
    const techRollCode = document.getElementById('tech-RollCode');
    const techRollHere = document.getElementById('tech-RollHere');
    const techRoll20Btn = document.getElementById('tech-Roll20');

/* Skills - Weapons */
    const weaponsDie = document.getElementById('weapons-die');
    const weaponsRollCode = document.getElementById('weapons-RollCode');
    const weaponsRollHere = document.getElementById('weapons-RollHere');
    const weaponsRoll20Btn = document.getElementById('weapons-Roll20');

/* Skills - Drive */
    const driveDie = document.getElementById('drive-die');
    const driveRollCode = document.getElementById('drive-RollCode');
    const driveRollHere = document.getElementById('drive-RollHere');
    const driveRoll20Btn = document.getElementById('drive-Roll20');
    
/* Skills - Sneak */
    const sneakDie = document.getElementById('sneak-die');
    const sneakRollCode = document.getElementById('sneak-RollCode');
    const sneakRollHere = document.getElementById('sneak-RollHere');
    const sneakRoll20Btn = document.getElementById('sneak-Roll20');
    
/* Skills - Wits */
    const witsDie = document.getElementById('wits-die');
    const witsRollCode = document.getElementById('wits-RollCode');
    const witsRollHere = document.getElementById('wits-RollHere');
    const witsRoll20Btn = document.getElementById('wits-Roll20');
    
/* Skills - Hot */
    const hotDie = document.getElementById('hot-die');
    const hotRollCode = document.getElementById('hot-RollCode');
    const hotRollHere = document.getElementById('hot-RollHere');
    const hotRoll20Btn = document.getElementById('hot-Roll20');

/****************
EVENT LISTENERS
****************/
/* Skills - Stunts */
    stuntsDie.addEventListener("change", () => UpdateCopyText("Stunts", "stunts-die", "stunts-code"));
    stuntsRollHere.addEventListener("click", () => RollSkillHere("stunts-die", "stunts-result"));
    stuntsRollCode.addEventListener("click", () => CopyToClipboard("stunts-code"));
    stuntsRoll20Btn.addEventListener("click", () => Roll20Send("Stunts","stunts-code","stunts-die"));
    //Roll20ChatSend (skillName, skillMsgDiv, skillValueDiv)
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

// Roll20 Chat Event Listeners
    
/*     brawlRoll20Btn.addEventListener("click", () => Roll20ChatSend(brawlMsg));
    toughRoll20Btn.addEventListener("click", () => Roll20ChatSend(toughMsg));
    techRoll20Btn.addEventListener("click", () => Roll20ChatSend(techMsg));
    weaponsRoll20Btn.addEventListener("click", () => Roll20ChatSend(weaponsMsg));
    driveRoll20Btn.addEventListener("click", () => Roll20ChatSend(driveMsg));
    sneakRoll20Btn.addEventListener("click", () => Roll20ChatSend(sneakMsg));
    witsRoll20Btn.addEventListener("click", () => Roll20ChatSend(witsMsg));
    hotRoll20Btn.addEventListener("click", () => Roll20ChatSend(hotMsg)); */
