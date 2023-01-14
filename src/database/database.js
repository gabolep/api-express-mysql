import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "lep134679",
  database: "api-express-react",
  port: "3306",
});

const getConnection = () => {
  return connection;
};

module.exports = { getConnection };
