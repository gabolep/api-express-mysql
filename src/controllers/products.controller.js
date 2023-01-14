import { getConnection } from "./../database/database";

const getProducts = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addProduct = async (req, res) => {
  try {
    const { id, store, name, price } = req.body;
    if (store === undefined || name === undefined || price === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }
    const productObject = { id, store, name, price };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO products SET ?",
      productObject
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { store, name, price } = req.body;

    if (
      id === undefined ||
      store === undefined ||
      name === undefined ||
      price === undefined
    ) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const productObject = { id, store, name, price };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE products SET ? WHERE id = ?",
      [productObject, id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM products WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const method = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
