# asianfoodlegit2
Complete do-over of full stack web application for UW Coding Bootcamp, Final Group Project, January 2020

* Frontend (React)
* Backend (Express)
* Database (MySQL)

Technologies Used:  HTML, CSS, Javascript, NodeJS, Express, NPM, MySQL, Sequelize, Sequelize CLI, Postman

## Deployment
And to deploy, Frontend to Netlify and Backend to Heroku.
* Netlify  https://xenodochial-wing-89433b.netlify.com
* GitHub  https://github.com/cchin1/asianfoodlegit2
* Heroku  https://asianfoodlegit2.herokuapp.com/

## Project Requirements
* Must use ReactJS in some way (even if minimal)
* Must use a Node and Express Web Server
* Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM
* Must have both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with Data)
* Must utilize at least two libraries, packages, or technologies that we haven’t discussed
* Must have a polished frontend/UI
* Must have folder structure that meets MVC Paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Must not expose sensitive API key information on the server (Optional Bonus) Allow for or involve the authentication of users in some way

## Branches

#### Inspired by gitflow.
* 'master': This is the production branch.
* 'develop': This is where we all merge our changes together before it goes to prod.
* 'working branches': We will use a naming convention like this 'candice/mything'.  These are our personal branches for doing our assigned feature.

#### The rules:
* 'master': Must be clean, tests passing, software working correctly.
* 'develop': Should almost always be clean, tests passing, software working correctly. Avoid breaking develop rules unless it is absolutely necessary to get through some large refactor or something.
* 'yourname/yourthing': Do whatever you want.
* It is not recommended to delete prior/old branches in GitHub, until/unless the total number of branches is truly problematic.

## Build

There are two projects. In the backend folder we have a Node.js Express server application that serves as the API. In the frontend folder we have a React App. At the top level, we have an additional `package.json` which has scripts that reach in to the frontend or backend folders and run `package.json` scripts therein.

## Generated Constants

When we run the app locally for development, we need the React app to talk to a locally running development API server at `http://localhost:XXXX`. When we deploy the app to Heroku and Netlify, however, we need the React app to talk to the production API server at `https://asianfoodlegit2.herokuapp.com`. We could accomplish this with environment variables, but we found that different operating systems in the team members' environments caused issues.

So we wrote a small Node.js program, `frontent/src/generate-constants.js`, which spits out a JavaScript file with the string constants we need. It takes an argument, either `prod` or `dev` so that it knows which strings to spit out. The file it creates is `frontent/src/generated-constants.js` and this file is `.gitignore`d.

## Running the System Locally (for Development)

  * TODO - soon a MySQL Database will be required, write instructions for setting that up locally.
  * Run the API Server: At the root of the repo, run `npm dev:backend` (or cd into `backend` and run `npm run dev`).
  * Run the React App: In another terminal, at the root of the repo, run `npm dev:frontend` (or cd into `frontend` and run `npm start`).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

#### GitHub Issues

Using github issues to track development of the major components of backend and frontend work.



