import express from "express";
import router from "./NoteRouters";

const app = express();

app.use(express.json());
app.use("/notes", router);

app.listen(3000, () => console.log("Server is running"));

export default app;
