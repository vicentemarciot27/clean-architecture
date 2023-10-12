// Centralizes data souce functionality

import { Note } from "../../entities/Note.js";
import { DateAdapter } from "../adapters/Date/DateAdapter.js";

export class InMemoryNoteRepository {
  constructor() {
    this.notes = [];
    this.idCounter = 1;
    this.dateAdapter = new DateAdapter();
  }

  //CRUD: Create, Read, Update, Delete
  async CreateNote(author, author_id, title, content) {
    const currentDate = this.dateAdapter.getCurrentDate();
    const note = new Note(
      this.idCounter++,
      author,
      author_id,
      title,
      content,
      currentDate
    );

    this.notes.push(note);
    return note;
  }

  async ListNotes() {
    return this.notes;
  }

  async FindNoteByID(id) {
    const note = this.notes.find((note) => note.id === id);
    if (note) return note;
    else return null;
  }

  async FindNoteByTitle(title) {
    const note = this.notes.find((note) => note.title === title);
    if (note) return note;
    else return null;
  }

  async EditNoteTitle(id, title) {
    const note = this.notes.find((note) => note.id === id);
    note.title = title;
    return note;
  }

  async EditNoteContent(id, content) {
    const note = this.notes.find((note) => note.id === id);
    if (note) {
      note.content = content;
      note.lastModifiedDate = this.dateAdapter.getCurrentDate();
      return note;
    } else return null;
  }

  async DeleteNote(id) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    if (noteIndex !== -1) {
      this.notes.splice(noteIndex, 1);
      return true;
    } else return null;
  }
}
