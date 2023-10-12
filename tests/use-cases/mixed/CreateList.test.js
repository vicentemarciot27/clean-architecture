import { ListNotes } from "../../../src/use-cases/NoteVisualization/ListNotes";
import { CreateNote } from "../../../src/use-cases/CreateNote";

describe("Integration between CreateNote and ListNotes", () => {
  let noteRepository;
  let createNote;
  let listNotes;

  beforeEach(() => {
    noteRepository = {
      CreateNote: jest.fn((author, author_id, title, content) => {
        const newNote = { author, author_id, title, content }; // Simplified note structure for illustration
        noteRepository.notes = [...(noteRepository.notes || []), newNote]; // Add the new note to the list
        return newNote;
      }),
      ListNotes: jest.fn().mockResolvedValue([]), // Initially no notes
      // ... add other required methods if any
    };
    createNote = new CreateNote(noteRepository);
    listNotes = new ListNotes(noteRepository);
  });

  it("should create a note and then list it", async () => {
    // Arrange
    const author = "John Doe";
    const author_id = "1234";
    const noteTitle = "Note Title";
    const noteContent = "Note Content";

    // Act: Create a note
    const createdNote = await createNote.execute(
      author,
      author_id,
      noteTitle,
      noteContent
    );
    noteRepository.ListNotes.mockResolvedValue([createdNote]); // Mock repository to return the created note

    // Act: List notes
    const notes = await listNotes.execute();

    // Assert
    expect(notes).toHaveLength(1);
    expect(notes[0].title).toBe(noteTitle);
    expect(notes[0].content).toBe(noteContent);
    expect(notes[0].author).toBe(author);
    expect(notes[0].author_id).toBe(author_id);
  });
});
