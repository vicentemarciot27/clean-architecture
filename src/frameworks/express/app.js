import express from "express";
import router from "./NoteRouters";

const app = express();

app.use(express.json());
app.use("/notes", router);
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(3000, () => console.log("Server is running"));

export default app;
