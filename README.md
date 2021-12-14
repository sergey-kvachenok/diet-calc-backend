# Diet calculator client

This part is a server side of the graphql app. It uses `postgress` ad a data base, `prisma` to manipulate the DB, `apollo` as graphql server side.

## Available Scripts

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:4000) to view the graphql server in the browser.

### `yarn migrate`

Add new migration to the DB

### `yarn prettier`

Format the code according to .prettierrc file

### Deployment
The app is deployed to Heroku. It uses `heroku-postgresql`
`https://diet-calc-server.herokuapp.com/`