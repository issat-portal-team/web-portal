import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import {User} from "../../model/Entity/User";

@JsonController()
export class UserController {

  @Get("/users")
  getAll() {
    return "No user found";
  }

  @Get("/users/:id")
  @OnUndefined(404)
  getOne(@Param("id") id: number) {
    return "No user found";
  }

  @Post("/users")
  post(@Body() user: any) {
    return "No user found";
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() user: any) {

    return "No user found";
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return "Removing user...";
  }
}
