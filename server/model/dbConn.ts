import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./Entity/User";

export function connect() {
  let connection=createConnection({
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
  }).then(async connection => {
      // here you can start to work with your entities
  }).catch(error => console.log(error));

}
export async function insertUser(username:string,email:string,password:string){
  let connection=createConnection({
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
  }).then(async connection => {
      let user = new User();
      user.username = username;
      user.email = email;
      user.password = password;
      let userRepository = connection.getRepository(User);
      await userRepository.save(user);
      console.log("User has been saved. User id is", user.id);
      connection.close();
    }).catch(error => console.log(error));




}
export function checkUser(username:string,email:string,password:string){
  createConnection().then(connection => {

    let user = new User();
    user.username = username;
    user.email = email;
    user.password = password;
    console.log("Checking Users");

}).catch(error => console.log(error));
}
