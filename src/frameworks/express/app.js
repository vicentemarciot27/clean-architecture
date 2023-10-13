import express from "express";
import router from "./NoteRouters";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/notes", router);
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

export default app;
