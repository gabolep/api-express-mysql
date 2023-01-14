import express from "express";
import morgan from "morgan";
import usersRoutes from "./routes/users.routes";

const app = express();

//settings
app.set("port", 4000);

//Middleware
app.use(morgan("dev"));

//Routes
app.use("/api/users", usersRoutes);

export default app;
