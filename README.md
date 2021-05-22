# TheExpressWay

## Description
Given some starter code, the goal of this project was to modify the application Note Taker so that users can ultimately save and retrieve notes from a JSON file. The job was to build the back end of the application, connect it to the developed front end, and deploy the application to Heroku.

Here's the list of the criteria that the application had to meet:

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

I've attached a live link of the current application below. Feel free to click the link and see if the criteria was indeed met. You can go through the table of contents for more information regarding this project and its contributions.

Heroku Live Link: https://peaceful-citadel-46056.herokuapp.com

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions?](#questions?)
* [License](#license)

## Installation
To install this program, make sure to be in your Terminal and run this comand:
```bash
git clone git@github.com:ucruz2025/TheExpressWay.git
```

Once cloned, make sure to install the dependancies to your computer in order for the program to run locally:
```bash
npm i
```

To start using the program, just run the following command and the program will be active:
```bash
npm start
```

Then, on any browswer, type out localhost:4000 to view the application at hand.

## Usage
 Once the application is opened by clicking on the live link or through your localhost, you can click on the "Get Started" button and start taking notes with Express! You can type out your note information under "Note Title" and "Note Text". Once you're done, a new icon will appear on the top right corner where you can save this note. Then, the note will appear on the left side of website, and you can continue to write new notes by clicking the pencil icon on the top right corner. 
 
 * If you've install this application, these notes will be save onto your local db.json file.

* To remove any notes, you can just click the red icon next to your saved notes and they will be deleted.

## Contributing
Contribution details can be found under the license section of this file.

## Questions?
If you happen to have any further questions regarding the project, feel free to reach out to:

Github: ucruz2025

Email: ucruz2025@gmail.com

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
Copyright 2021 Uriel Cruz Salgado

  Permission is hereby granted, free of charge, to any person obtaining a copy 
  of this software and associated documentation files (the "Software"), to deal 
  in the Software without restriction, including without limitation the rights 
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
  copies of the Software, and to permit persons to whom the Software is furnished 
  to do so, subject to the following conditions:

  Contact owner of this software. Information can be found under "Questions?" section.
      
  The above copyright notice and this permission notice shall be included in 
  all copies or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
  Live link to license: https://opensource.org/licenses/MIT