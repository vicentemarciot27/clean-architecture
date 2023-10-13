import { InMemoryNoteRepository } from "../../../../src/interfaces/repositories/InMemoryNoteRepository";

describe("InMemoryNoteRepository", () => {
  let repository;

  beforeEach(() => {
    repository = new InMemoryNoteRepository();
  });

  it("should create and store a note", async () => {
    const noteData = {
      author: "John Doe",
      author_id: "1234",
      title: "Sample Note",
      content: "This is a sample note.",
    };

    const createdNote = await repository.CreateNote(
      noteData.author,
      noteData.author_id,
      noteData.title,
      noteData.content
    );
    
    expect(createdNote.author).toBe(noteData.author);
    expect(createdNote.author_id).toBe(noteData.author_id);
    expect(createdNote.title).toBe(noteData.title);
    expect(createdNote.content).toBe(noteData.content);
  });

  it("should list all stored notes", async () => {
    await repository.CreateNote("John Doe", "1234", "Title 1", "Content 1");
    await repository.CreateNote("John Doe", "1234", "Title 2", "Content 2");


    const notes = await repository.ListNotes();

    expect(notes).toHaveLength(2);
    expect(notes[0].title).toBe("Title 1");
    expect(notes[1].title).toBe("Title 2");
  });

});
