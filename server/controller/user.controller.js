import { getAllUsers } from "../models/user.model.js";

const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getAllUsersController };
