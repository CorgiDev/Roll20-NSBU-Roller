# Roll20 Never Stop Blowing Up (NSBU) Roller

This is just a browser extension to make my Never Stop Blowing Up (NSBU) rolls more easily. This is all based on the NSBU game system. You can learn more about it from the following pages, or checking out the sections in this page under the [NSBU Game Details heading](#nsbu-game-details):

- [‘Never Stop Blowing Up’ Game System | DropOut Store](https://store.dropout.tv/products/never-stop-blowing-up-game-system) (It is free!)
- [Dimension 20: Never Stop Blowing Up | :DropOut](https://www.dropout.tv/dimension-20-never-stop-blowing-up)
  - 10 episodes
  - Requires a subscription to watch.

## Extension Details

### Compatibility

The extension works in Edge, Chrome, and other Chromium based browsers that support loading in your own extensions.
 
### Load the Extension

Currently, the extension isn't to a point where I could put it on the Chrome or Edge stores as a free download. So you have to manually load it in. The following steps were written from within Chrome, but should be fairly similar in Edge.

1. Pull down this repository. 
2. In your Chrome browser's address bar, locate the Extensions button. Click that button to open a context menu.
3. Select the "Manage Extensions" option from that menu.
   - You can also access the Extensions menu typically from within the main settings menu of your browser.
   - <img width="332" height="580" alt="Chrome extension menu opened and the Manage Extensions option highlighted." src="https://github.com/user-attachments/assets/ca52a7e8-7f5a-48f6-9e3d-cd51d89ea4e1" />
4. You should be taken to an Extensions window. From there, select "Load Unpacked".
   - <img width="406" height="114" alt="Chrome Extension window with the Load Unpacked button currently in focus." src="https://github.com/user-attachments/assets/c5013f24-c951-4628-97e1-403687d7539d" />
5. A file window should open to navigate the folders and files on your local machine.
   - <img width="800" height="450" alt="Mac OS Finder window with the Chrome folder currently shown as the selected folder." src="https://github.com/user-attachments/assets/76d4055c-3301-4ef8-a719-6173da7e3c93" />
6. Within the file window, navigate to where the repository files are located on your local machine.
7. Then navigate to "browser-extension" > "Chrome" within the repository folders on your local machine.
8. Once you are inside the "Chrome" folder, select to open the folder from the file navigation window buttons.
9. If the extension loaded in, you will see "NSBU Tracker" listed in your "All extensions" list.
   - <img width="804" height="439" alt="Chrome All extensions list with the NSBU Tracker extension listed." src="https://github.com/user-attachments/assets/ce21938f-0fad-4e0d-9b6c-8f69ab3f4869" />

#### Add Extension to Your Browser Bar

The extension will not immediately show up in your browser's address bar area. There are 2 ways to get the extension to display in your browser bar, through the Extensions button in the browser bar or from the Manage Extensions window.

##### Browser Bar Extensions Button

1. Open the "Extensions" menu from the browser bar.
2. Find the NSBU Tracker extension in the list of extensions.
3. Click the pin icon that is next to the NSBU extension in the list so that it is activated.

<img width="374" height="386" alt="Extension menu opened from browser bar with the pin icon activated beside the NSBU Tracker extension." src="https://github.com/user-attachments/assets/66b6432c-aeaf-4508-87da-2dc1bd0d1b97" />

##### Manage Extensions Window

1. Open the main menu for your browser and select "Extensions". Then select "Manage Extensions" from the new menu section that displays.
   - <img width="539" height="90" alt="Extensions menu expanded to show Manage Extensions option highlighted." src="https://github.com/user-attachments/assets/a1fae2e0-483c-4a51-a31d-9741dd797926" />
   - Alternatively, click the Extensions button in the browser bar and select "Manage Extensions".
2. Find the NSBU Tracker extension under "All Extensions" and select it's details button.
   - <img width="423" height="273" alt="NSBU Tracker under All Extensions with its Details button in focus." src="https://github.com/user-attachments/assets/9a3c9b48-09cc-431e-b083-d9679777cda4" />
3. Toggle the "Pin to toolbar" option on and the extension will show up in your browser bar.
   - <img width="707" height="62" alt="Pin to toolbar option toggled on." src="https://github.com/user-attachments/assets/ef7eae9b-a61d-44c2-a119-e5e580a91222" />

### Web Interface

There is also a "Web Interface" folder within this repository. If you just open the NSBU.html file within that folder, it will also essentially act as the extension.

## NSBU Game Details

### Stat Types

The following stats are the ones tht would potentially need to roll for:

- Stunts
- Brawl
- Tough
- Tech
- Weapons
- Drive
- Sneak
- Wits
- Hot

### Roll Values

The following are the die values you may need to roll:

- 1d4
- 1d6
- 1d8
- 1d10
- 1d12
- 1d20
  - 1d00 - Only happens when you blow up a d20
 
### Turbo Tokens

Turbo tokens are earned when you blow up roll twice, or fail a roll.

### Injuries

Injuries have to be tracked. Injury types include:

- Superficial
- Severe
- Adrenlized

### Abilities

I want to have a selection of abilities I can check, or click to display in chat.

### Examples of the commands

```
  /me Rolls a Drive roll
  /roll 1d4
```

## Resources

The following resources are for me to reference as I work on building out this extension, and are not relevant to the NSBU game itself.

- https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world
- https://www.freecodecamp.org/news/building-chrome-extension/
- https://www.w3schools.com/css/css3_mediaqueries_ex.asp
- https://www.w3schools.com/css/css3_flexbox_container.asp
- Resources for adding a dark mode:
  - https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page
