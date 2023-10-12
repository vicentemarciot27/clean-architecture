import express from "express";
import { InMemoryNoteRepository } from "../../interfaces/repositories/InMemoryNoteRepository";
import { NoteController } from "../../interfaces/controllers/NoteController";
import { Request } from "../../interfaces/controllers/request";
import { Response } from "../../interfaces/controllers/response";

const noteRepository = new InMemoryNoteRepository();
const noteController = new NoteController(noteRepository);
const router = express.Router();

router.post("/CreateNote", async (req, res) => {
  try {
    const request = new Request(req);
    const response = new Response((error, { status, body }) => {
      if (error) res.status(500).send(error.message);
      else res.status(status).send(body);
    });

    const result = await noteController.CreateNote(request);
    response.status(result.status).json(result.body);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/ListNotes", async (req, res) => {
  const request = new Request(req);
  const response = new Response((error, { status, body }) => {
    if (error) res.status(500).send(error.message);
    else res.status(status).send(body);
  });

  const result = await noteController.ListNotes(request);
  response.status(result.status).json(result.body);
});

router.put("/EditNoteTitle:id", async (req, res) => {
  const request = new Request(req);
  const response = new Response((error, { status, body }) => {
    if (error) res.status(500).send(error.message);
    else res.status(status).send(body);
  });

  const result = await noteController.EditNoteTitle(request);
  response.status(result.status).json(result.body);
});

router.put("/EditNoteContent:id", async (req, res) => {
  const request = new Request(req);
  const response = new Response((error, { status, body }) => {
    if (error) res.status(500).send(error.message);
    else res.status(status).send(body);
  });

  const result = await noteController.EditNoteContent(request);
  response.status(result.status).json(result.body);
});

export default router;
