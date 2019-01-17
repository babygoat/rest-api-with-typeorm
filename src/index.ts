import "reflect-metadata";
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import {createConnection} from "typeorm";
import {User} from "./entity/User";
/*
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
*/

const app = express();
const server = new http.Server(app);

// Setup database connection
const connection = createConnection().catch(err => console.error(err));

const port = 3000;
const host = "localhost";
const protocol = "http";

server.listen( port, (err: Error) => {
  if (err) {
    console.error(err)	
  }
  console.info('==> 💻o  Open %s://%s:%d in a browser to view the app.', protocol, host, port)
})
