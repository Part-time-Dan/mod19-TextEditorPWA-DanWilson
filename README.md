[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

# Just Another Text Editor PWA

<!-- [![Deployed](https://www.herokucdn.com/deploy/button.svg)](add Heroku link) -->

Utilize Progressive Web Application packages and standards to cache and store content from a text editor, make it available offline so work isn't lost, and allow it to be installed as a standalone app on a device.

## Description

The goal of this project is to take existing starter code for an online text editor program, and enhance the functionality by converting it into a PWA then deploying it on Heroku.

Specific criteria for this project were to provide necessary packages and add code for the text editor to meet the criteria of a progressive web application:

- Efficient and responsive (webpack)
- Works offline / caches static assets (service worker, indexedDB)
- Search engine optimized (manifest) 
- Installable


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Questions](#questions)
- [License](#license)
- [Link](#link)
- [Images](#images)

## Installation

Install button provided: 

![Install button](/assets/JATE-install.PNG)


Or use the install icon to the right in the address bar: 

![Install icon](/assets/URL-install-icon.png)

To uninstall:

- On Mac, use Finder > select the app > Drag to trash OR select app > File > Move to Trash from menu bar

- On Windows, go to Programs > Uninstall a Program > select the app from list > click Uninstall at the top

## Usage

The app runs in web browsers and can also be installed locally. The application works as a basic text editor and features text recognition and highlighting for Javascript terms like ```new``` or ```this```.

The features specifically added to this project to make it a PWA can be viewed using Chrome dev tools> Inspect and going to the "Application" tab. On the side bar, you can find the Manifest and Service Workers to verify this is a PWA. Also in the side bar, under "Storage" you can see the application storing the users data under IndexedDB > JATE.

## Contributions

This is an educational project. No contributions are being accepted.

## Questions

If you have questions about this project:

Find me on GitHub -> [Part-time-Dan](https://github.com/Part-time-Dan)

OR

Reach me by email here -> [danielwilson.web@gmail.com](mailto:danielwilson.web@gmail.com)


## License

For additional license information, please follow the link: [MIT](https://choosealicense.com/licenses/mit/)

## Link

<!-- [Heroku Deployment](get deploy link) -->

## Images

![image]

![image]

![image]

![image]

<!-- images of deployed site, 1 of manifest, 1 of indexedDB cached data, 1 of offline, 1 of installed app running -->