// This controller receives the HTTP requests related to notes and invokes use cases accordingly
// Errors handled here should be related to business rules and business logic

import { CreateNote } from "../../use-cases/CreateNote.js";
import { ListNotes } from "../../use-cases/NoteVisualization/ListNotes.js";
import { EditNoteTitle } from "../../use-cases/NoteEditing/EditNoteTitle.js";
import { EditNoteContent } from "../../use-cases/NoteEditing/EditNoteContent.js";
import { DeleteNote } from "../../use-cases/DeleteNote.js";
import { FindNoteByID } from "../../use-cases/NoteVisualization/FindNoteByID.js";
import { FindNoteByTitle } from "../../use-cases/NoteVisualization/FindNoteByTitle.js";

export class NoteController {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  async CreateNote(request) {
    const createNote = new CreateNote(this.noteRepository);
    if (await this.noteRepository.FindNoteByID(request.body.id)) {
      return { status: 409, body: { message: "Note id already exists" } };
    }
    const note = await createNote.execute(request.body.title);
    return { status: 201, body: note };
  }

  async ListNotes(request) {
    const listNotes = new ListNotes(this.noteRepository);
    const notes = await listNotes.execute();
    if (notes.length === 0) {
      return { status: 200, body: notes };
    }
    return { status: 404, body: { message: "No notes found :(" } };
  }

  async FindNoteByID(request) {
    const findNote = new FindNoteByID();
    const note = await findNote.execute(request.body.id);
    if (note) {
      return { status: 200, body: note };
    }
    return { status: 404, body: { message: "Note not found" } };
  }

  async FindNoteByTitle(request) {
    const findNote = new FindNoteByTitle();
    const note = await findNote.execute(request.body.title);
    if (note) {
      return { status: 200, body: note };
    }
    return { status: 404, body: { message: "Note not found" } };
  }

  async EditNoteTitle(request) {
    const editNoteTitle = new EditNoteTitle(this.noteRepository);
    const note = await editNoteTitle.execute(
      request.body.id,
      request.body.title
    );
    if (note) {
      return { status: 200, body: note };
    }
    return { status: 404, body: { message: "Note not found" } };
  }

  async EditNoteContent(request) {
    const editNoteContent = new EditNoteContent(this.noteRepository);
    const note = await editNoteContent.execute(
      request.body.id,
      request.body.content
    );
    if (note) {
      return { status: 200, body: note };
    }
    return { status: 404, body: { message: "Note not found" } };
  }

  async deleteNode(request) {
    const deleteNote = new DeleteNote();
    const note = await deleteNote.execute(request.body.id);
    if (note) {
      return { status: 200, body: note };
    }
    return { status: 404, body: { message: "Note not found" } };
  }
}
