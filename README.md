
## Sakura Learning

Users can register as a new user and log in to start learning Japanese. A Japanese word and its phonetic will be displayed. 

Upon entering the word in the input box, you will be notified immediately whether you got it right or wrong. The user will be notified of the right answer if the wrong answer was submitted. Progress will be saved when a user logs out and back in.

 Efficient learning is utilized via a spaced repetition algorithm employed on the back end and and saved as an array. The essence of a Linked List is used to deploy the algorithm.

Users can also view their past progress of correct and incorrect answers to other vocabulary terms and view their percentage scores. 

All endpoints are protected via JWT authentication. As such, each user's experience is personalized.

Deployed Website: https://spaced-rep-client-dev.herokuapp.com/

![Front Page](./screenshots/sakuraProj.png)

This is the Landing Page where all the users initially see. A short description about the website is about and its intentions are stated. 

React and Redux are used on the front-end (with Create React-App and Buildpack for Heroku).
NodeJS and as well as Mongoose and Express are used on the back-end with MongoDB as the database storage. 

NPM Modules used are:

  * Front-end
    1. Dotenv
    2. Enzyme
    3. Jwt-decode
    4. React
    5. React-dom
    6. React-router-dom
    7. React-Redux
    8. Redux
    9. Redux-thunk
    
  * Back-end
    1. Bcryptjs
    2. Cors
    3. Dotenv
    4. Express
    5. Passport
    6. Passport-jwt
    7. Passport-local
    8. Mongoose
    9. Morgan

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
