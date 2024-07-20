import { getAllUsersController } from "../controller/user.controller.js";

import { Router } from "express";
const UsersRouter = Router();

UsersRouter.get("/", (req, res) => {
  try {
    getAllUsersController(req, res);
  } catch (err) {
    console.log(err);
  }
});

export default UsersRouter;
