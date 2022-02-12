# Ensemble

For the final project, our group has decided to create a mock social media app that can allow users to search, create, join bands with their preferences of genre and instruments. This project was built using React front-end, with PostgreSQL db and Express.js back-end.

## Layouts

!["Demo"](https://github.com/KangerDrew/ensemble/blob/master/client/docs/demo.gif)

## Entity Relationship Diagram

!["ERD"](https://github.com/KangerDrew/ensemble/blob/master/server/docs/ERD.png)

## Primary Dependencies

- axios
- socket.io
- react-spring
- material ui
- sass
- framer-motion
- psql database

## Getting Started

1. Fork this repository, then clone your fork of this repository to your local machine.
2. Install dependencies using the `npm install` command. This command must be run twice - once in the client directory, and once more in the root directory.
3. You need to have PostgreSQL setup within your machine. To install, go to <https://wiki.postgresql.org/wiki/Homebrew> for more info.
4. To use PostgreSQL, refer to .env.example and replace any database access information with that of your local psql database.
5. Add the schema to psql database by running \i on the schema.sql in our db folder.
6. Optionally, you may also seed the database with some of our test data by running \i on the seeds.sql file as well.
7. Start the backend by running the  `npm start` command from the root directory. You should see the following message on the terminal: "Express seems to be listening on port 8081 so that's pretty good 👍".
8. Start the app by running the `npm start` command from the client directory. The app will be served at <http://localhost:3000/>. Your default browser should open up and you are ready to start!
