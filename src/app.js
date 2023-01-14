import express from "express";
import morgan from "morgan";
import usersRoutes from "./routes/users.routes";
import productsRoutes from "./routes/products.routes";

const app = express();

//settings
app.set("port", 4000);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);

export default app;
