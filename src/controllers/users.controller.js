import { getConnection } from "./../database/database";

const getUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM users");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addUser = async (req, res) => {
  try {
    const { id, user, name, password } = req.body;
    if (user === undefined || name === undefined || password === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }
    const userObject = { id, user, name, password };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO users SET ?",
      userObject
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { user, name, password } = req.body;

    if (
      id === undefined ||
      name === undefined ||
      password === undefined ||
      user === undefined
    ) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const userObject = { id, user, name, password };
    const connection = await getConnection();
    const result = await connection.query("UPDATE users SET ? WHERE id = ?", [
      userObject,
      id,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM users WHERE id = ?", id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const method = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
