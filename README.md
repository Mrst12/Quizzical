# QUIZZICAL

[view the live site here](https://mrst12.github.io/Quizzical/)

[View my Github](https://github.com/Mrst12/Quizzical)

## Final Design
![responsive images](./assets/design/quizzical-responsive.png)

## Introduction
The aim of this website was to use HTML, CSS and JavaScript to create an interactive,
front-end site, that responds to users actions. I thought that a quiz would be a great idea 
as who doesn't love a good quiz.
## Contents
- [User Experience](#user-experience-ux)
    - [User Stories](#user-stories)
- [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Images](#images)
- [Wireframes](#wireframes)
- [Features](#features)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Programmes Used](#programmes-used)
- [Testing](#testing)
    - [Lighthouse](#lighthouse)
    - [Devices](#devices)
    - [Testing User Stories](#testing-user-stories)
    - [Fixed Bugs](#fixed-bugs)
    - [Known Bugs](#known-bugs)
    - [Functionality](#functionality)
    - [Future features](#future-features)
- [Deployment](#deployment)
    - [Forking The Repository](#forking-the-repository)
    - [Cloning The Repository](#cloning-the-repository)
- [Credits](#credits)
    - [Code](#code)
    - [Acknowledgements](#acknowledgements)
## User Experience (UX)

- ### User Stories
    
    1. As a user, I want to test my general knowledge.
    2. As a user, I want to choose from a range of answers.
    3. As a user, I want to see my score as I progress.
    4. As a user, I want feedback from the questions.  

- ### Design
    - #### Colour scheme
        - used for background colour
![B8E4F0](./assets/design/background-colour.png)

        - used for hover effect on buttons
![98BAE7](./assets/design/button-colour.png)

    - black was used for text
    - white was used for body background
    - blue was used for border colour
    - green was used for the text colour of correct answers
    - red was used for the text colour of incorrect answers


    - #### Typography
        - I have used **Merriweather** for the font style with a backup of sans-serif should it not be accessible for all.

- ### Images
    - The image used for the logo was taken from clipart (acknowledged in credits)

#### Wireframes

[Desktop wireframe](./assets/wireframes/quizzical-desktop.png)

[Tablet wireframe](./assets/wireframes/quizzical-tablet.png)

[Mobile wireframe](./assets/wireframes/quizzical-mobile.png)

## Features

![heading image](./assets/screenshots/quizzical-heading.png)
- consists of a logo and title of the quiz
![question image](./assets/screenshots/quizzical-question.png)
- each question is displayed randomly 10 questions per game 40 questions to choose from
![answers section](./assets/screenshots/quizzical-answers.png)
- Four answers to choose from shows green for correct and red for incorrect
![restart image](./assets/screenshots/quizzical-restart.png)
- Allows the user to restart at the end of a game instead of using browser refresh
![score section](./assets/screenshots/quizzical-score.png)
- Allows user to see their correct and incorrect score as they progress

## Technologies Used
### Languages
    - HTML
    - CSS
    - JavaScript
### Programmes used
    - Balsamiq
        - For the wireframes
    - Git
        - For version control, commiting, and pushing to Github
    - Github
        - For storing the repository, files, and images pushed from Gitpod
    - Gitpod
        - IDE used to code the website
    - Chrome developer tools
        - for checking compatibilty, troubleshooting and editing code
    - Am I responsive
        - Used to test responsiveness of the website at different screen sizes.
    - Google Fonts
        - Used for the font of the website.
    - Freeformatter.com
        - To format my HTML, CSS, and Javascript code 
        
## Testing
The W3C Markup Validator, W3C CSS Validator Services and jshint.com were used to validate every page of the project to ensure there were no syntax errors in the project.
![HTML test](./assets/screenshots/quizzical-html-check.png)
![CSS test](./assets/screenshots/quizzical-css-check.png)
- jshint 
    - Brought up eight warnings of missing semicolons, which were all corrected.
    - Brought up three unused variables, which was rectified.

### Lighthouse
- The site was tested using Lighthouse
![Lighthouse results](./assets/screenshots/lighthouse-quizzical.png)
### Devices
- The site was tested on **Chrome** and **Safari**
- The site was tested on an iphone 7, ipad, sony Experia and my dell laptop.
### Testing User Stories
1. As a user, I want to test my general knowledge.
    - A range of 40 general knowlege questions included each game with ten
    random questions.
2. As a user, I want to choose from a range of answers.
    - Four possible answers are available to choose from.
3. As a user, I want to see my score as I progress.
    - There is a correct and incorrect score counter at the bottom for the user to see.
4. As a user, I want feedback from the questions.
    - The correct answer shows green, the incorrect answers shows red.

### Fixed Bugs
    - When the quiz was due to restart, I noticed that the users were not noticing that the next button had changed to a restart button, so implemented a flashing restart button to alert the user to its difference allowing them to then check their scores before replaying, and resetting the scores back to zero.

    - There was a big scroll especially on mobile devices needed when the scores were at the top of the screen, so I moved them to the bottom, therefore reducing the amount of scrolling needed by the user, making it more user friendly.

### Known Bugs
- slight scroll needed to see the incorrect answers at times.

### Functionality
- All buttons have been tested and are accessible
- All buttons have been hovered over to ensure they work
- All images load as intended
- The game works as I intended

### Future features
- In the future I would like to implement a score tracker so when the game was
finished it would display the results with comments on how well the user had done.
- In the future I would like to implement a progress bar or counter so the user knew how many questions they had answered or had left to answer.

## Deployment

- The project was deployed to Github pages using the following steps:
1. Log into Github and locate the [Github repository](https://github.com/Mrst12/Quizzical).
2. Click on the settings icon at the top of the repository.
3. Scroll down until you come to the Github pages section
    - On this part it says it now has it's own dedicated tab and to click check it out click this.
4. Where it says **source** select **main**, next to this should say root.
5. Click save, then refresh the page.

### Forking the repository
1. Log into the Github repository.
2. Underneath your avatar is a button labelled **Fork**, click this.
3. You should have your own copy now.

### Cloning the repository
1. Log into Github and locate the repository.
2. Under the repository name click the button labelled **code**.
3. You will see an option to clone or download.
4. Copy the url for cloning by clicking the clipboard icon.
5. Launch gitpod or your own choice of directory.
6. Open Gitbash
7. Change the current working directory to the location you want the cloned directory to be.
8. Type git clone and paste the Url from step 4. 
9. Press enter to create the cloned directory.

## Credits
- [logo image](https://www.pinclipart.com/)
- Who wants to be a millionaire - bumper quiz book
    - used to generate the questions and answers

### Code
-  watched this you tube video for help to get started and took some snippets from it.
[You tube link](https://www.youtube.com/watch?v=riDzcEQbX6k)

### Acknowledgements:
- Code institute for course material and content
- Everybody on the slack community for support, advice, guidance and patience.
- My mentor for assistance and advice on planning and final submission feedback.
- My husband and children for their patience, support and understanding.