import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./Entity/User";

export function connect() {
  createConnection({
      type: "mysql",
      host: "localhost",
      port: 3308,
      username: "root",
      password: "",
      database: "web-portal-db",
      entities: [
          User
      ],
      synchronize: true,
      logging: false
  }).then(connection => {
      // here you can start to work with your entities
  }).catch(error => console.log(error));

}
export function insertUser(username:string,email:string,password:string){
  createConnection({
      type: "mysql",
      host: "localhost",
      port: 3308,
      username: "root",
      password: "",
      database: "web-portal-db",
      entities: [
          User
      ],
      synchronize: true,
      logging: false
  }).then(connection => {

    let user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    return connection.manager
            .save(user)
            .then(user => {
                console.log("User has been saved. User id is", user.id);
            });

}).catch(error => console.log(error));
}
export function checkUser(username:string,email:string,password:string){
  createConnection({
      type: "mysql",
      host: "localhost",
      port: 3308,
      username: "root",
      password: "",
      database: "web-portal-db",
      entities: [
          User
      ],
      synchronize: true,
      logging: false
  }).then(connection => {

    let user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    console.log("Checking Users");

}).catch(error => console.log(error));
}
