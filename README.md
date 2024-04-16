# Were They in the nWo?
Were They in the nWo is a website intended to provide an interactive means of basking in some classic 90's nostalgia. Dedicated to the group that "made wrestling cool", the intention of the site is to provide a fun quiz regarding membership of the eponymous stable to users.

The website is designed to provide the user with a profile and headshot of a persona from this wrestling era and then request that they confirm or deny whether that persona was a member of the nWo. A simple quiz such as this was selected for the foundation of the website as it not only services the niche interest of wrestling fans but also targets thier historical knowledge of same. 

Selection of the subject matter was two-fold; wrestling is currently experiencing a renaissance. New management in WWE has reignited the wrestling industry and many lapsed fans are returning to the product, as indicated by internet traffic and ticket sales. This makes the timing of such a website quite advantageous. Furthermore, many returning fans consider the era of the nWo to be the "peak" of wrestling as a whole. The intention of the website is to capitalise on this nostalgia by drawing traffic and to eventually grow the site to feature other features that hopefully convince new users to visit regularly.

![Am I Responsive](assets/readme-images/viewport-nwo.webp)

[Deployed website available here](https://adamfcode.github.io/nwo-quiz/) 

# Preparation
Preparation for the project included researching the nWo stable and its sub-groups in order to provide as varied a question pool as possible. The general aesthetic of the stable was also noted for style considerations, as well as canvassing wrestling fans in order to select appropriate wrestling personas and avoid constructing a quiz that was either too easy or too difficult.

## User Stories
* As a user, I wish to test my knowledge of the nWo with an accurate quiz.
* As a user, I want to seamlessly navigate the website without issue.
* As a user, I want a consistent experience that evokes the essence of the subject matter.
* As a user, I want to be informed of how many questions I got correct.

## Colour Palette
A simple palette was decided upon after reviewing the aesthetic of the nWo. Generally presented as black and white, the aesthetic was icnoic throughout the 90's and had a massive influence over wider pop culture in America at that time. Red was then selected as a colour to indicate user interactions, a nod to the red ring-gear worn by the Wolfpac, the most popular sub-section of the nWo in WCW.

### Selected Colour Palette:
![Colour Palette](assets/readme-images/colour-pal.webp)

## Typography
Creepster, a sans-serif font inspired by gothic imagery, was selected as the font for titles across the website as it was the closest in design to the original nWo font, as seen in the logo.

Roboto Mono, another sans-serif font, was chosen for larger pieces of text in order to maintain legibility against the black background without having to increase the font-size.

## Wireframes
The final presentation of the website mostly matches the wireframes that were mocked up prior to coding. The main difference is in the score tally area. It was decided during the coding process to provide the user with their total score after the quiz had concluded and a username was provided by the user.

### Image of the Wireframes
![Wireframes](assets/readme-images/wireframes.webp)

# Features
## Heading
The classic nWo logo was selected as the heading. Clicking on the logo returns the user to the homepage of the website. Below the logo is the title of the quiz, 'Were They in the nWo?', followed by a tagline that uses standard wrestling jargon("marks") and nWo-specific jargon("the bad guys") in order to appeal to wrestling fans.

### Picture of Heading on Desktop
![Heading Desktop](assets/readme-images/heading-desktop.webp)

### Picture of Heading on Mobile
![Heading Mobile](assets/readme-images/heading-mobile.webp)

## Hero Image
A cartoon depiction of the core three members of the nWo was selected as the hero image. Kevin Nash, Scott Hall and Hulk Hogan were selected as it was decided early on not to feature the three in the quiz itself as they are synonymous with the stable.

### Picture of Hero Image on Desktop
![Hero Image Desktop](assets/readme-images/hero-desktop.webp)

### Picture of Hero Image on Mobile
![Hero Image Mobile](assets/readme-images/hero-mobile.webp)

## Ruleset
The ruleset for the quiz features below the hero image and is written to once again use wrestling and nWo-specific jargon. Here, the user is also notified of the interactivity of the logo at the top of the screen. A simple, terse approach was selected in order to not chase away those looking for a quick, casual experience. 

### Picture of Ruleset on Desktop
![Ruleset Desktop](assets/readme-images/rulesdiv-desktop.webp)

### Picture of Ruleset on Mobile
![Ruleset Mobile](assets/readme-images/rulesdiv-mobile.webp)

## Quiz Button
The button to take users to the quiz page was styled similarly to the aesthetic of the rest of the page. Upon hovering over the button with the cursor, users are treated to a red background in order to pay tribute to the nWo Wolfpac and to also provide a splash of bold colour. The text content of "Too Sweet" was selected as it was the calling card of nWo members when greeting one another. It also allowed the text content of the button to continue on from the ruleset. On selecting this button, the user is brought to the quiz.html page.

### Image of Quiz Button
![Quiz Button](assets/readme-images/quiz-button.webp)

### Image of Quiz Button on Hover
![Quiz Button on Hover](assets/readme-images/quiz-button-hover.webp)

## Start Button
On load, the quiz page greets user with the same heading as before and a button to start to quiz. This button is styled similarly to the quiz button and also turns red on hover. Selecting this button provides the user with the quiz container in order to play the game.

### Image of Start Button
![Start Button](assets/readme-images/start-button.webp)

### Image of Start Button on Hover
![Start Button on Hover](assets/readme-images/start-button-hover.webp)

## The Quiz
Each question of the quiz provides the user with the following: an image of the persona in question, the name of the persona, a brief summary of their accomplishments and a selection of two answers.

### Image of Quiz on Desktop
![Quiz on Desktop](assets/readme-images/quiz-desktop.webp)

### Image of Quiz on Mobile
![Quiz on Mobile](assets/readme-images/quiz-mobile.webp)

## Question Subject
The subject of each question is an individual involved with wrestling between the mid-90's and early 00's as this was the time period in which the nWo and its subsidiaries were operational. 

Headshots were chosen for the persona images as they provide uniformity between examples and allows the user to see a clear, unobstructed view of the personas face.

Wrestling personas tend to work under different names throughout their careers. With this in consideration, the names selected were either those most associated with the persona or the name they explicitly used during the relevant era. In some cases nicknames have also been provided, though only when the nickname is generally acknowledged as part of that personas professional name, e.g Jushin "Thunder" Liger.

### Image of Question Subject
![Question Subject](assets/readme-images/image-name.webp)

## Question Text
The text of each question was written as a brief, often tongue-in-cheek description of the persona. Certain terms were used in order to appeal to wrestling fans. The question text is also intended to promote further interest in the persona. Should the user be unfamiliar with the question subject, hopefully the description ignites curiosity and sends the user seeking further information

### Image of Question Text on Desktop
![Question on Desktop](assets/readme-images/question-desktop.webp)

### Image of Question Text on Mobile
![Question on Mobile](assets/readme-images/question-mobile.webp)

## Answer Buttons
The user is presented with two buttons as potential answers, the text content of which is static between questions. This was decided upon as the question itself has only one of two possible answers; either they were a member of the stable or they were not. It also allowed usage of wrestling jargon and emulated the tone of the most famous members. These buttons are styled similarly to the prior buttons and also flash red upon being hovered over. Once a button is selected, both become "greyed out" and can no longer be toggled.

### Image of Answer Buttons
![Answer Buttons](assets/readme-images/answer-buttons.webp)

### Image of Answer Buttons on Hover
![Answer Buttons on Hover](assets/readme-images/answer-buttons-hover.webp)

### Image of Answer Buttons Selected
![Answer Buttons Selected](assets/readme-images/answer-buttons-selected.webp)

## Next Button
Upon selecting an answer, a "next" button materialises to allow the user to select the next question. This button is designed to appear until all questions have been answered. It is styled similarly to prior buttons, with a red splash appearing should the user hover over the button. The next button pulls a random question from the array and continues to do so until all questions have been answered.

### Image of Next Button
![Next Button](assets/readme-images/next-button.webp)

### Image of Next Button on Hover
![Next Button Hover](assets/readme-images/next-button-selected.webp)

## Username Entry
Upon cycling through all of the questions, the user is presented with a congratulations screen once again using the tone of the original nWo members. A field is provided to enter the users name and a button to submit the same. The submit button will not work unless the field has been filled out with some text. The submit button follows the same style precedent of prior buttons, complete with a red splash on hover.

### Image of Username Entry on Desktop
![Username Desktop](assets/readme-images/username-desktop.webp)

### Image of Username Entry on Mobile
![Username Mobile](assets/readme-images/username-mobile.webp)

### Image of Username Entry on Hover
![Username on Hover](assets/readme-images/username-hover.webp)

### Image of Username Entry with Unfilled Field
![Username Unfilled](assets/readme-images/username-unfilled.webp)

## Quiz Complete
Once the quiz has been completed and a username entered, the user is shown a Game Over screen which targets the provided username and provides a final score to the user. It was decided during development to not track the score as users play for two primary reasons. One was to deter users from being surprised by an answer and checking the facts on another website which may cause the user to forget or lose interest in the quiz. The second reason was to avoid players "learning" the answers as they play and instead to promote reconsideration of the users knowledge. A final button, styled similarly to the prior buttons with the same splash of red upon hovering, is presented to the user, allowing them to click and restart the quiz in a cleared state.

### Image of Quiz Complete on Desktop
![Quiz Complete Desktop](assets/readme-images/complete-desktop.webp)

### Image of Quiz Complete on Mobile
![Quiz Complete Mobile](assets/readme-images/complete-mobile.webp)

### Image of Restart Button
![Restart Button](assets/readme-images/restart-button.webp)

### Image of Restart Button on Hover
![Restart Button Hover](assets/readme-images/restart-buton-hover.webp)

# Features Earmarked for Future Implementation




# Testing



# Deployment



# Credits
