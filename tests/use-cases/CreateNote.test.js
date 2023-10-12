import { CreateNote } from "../../src/use-cases/CreateNote";

describe("CreateNote", () => {
  let noteRepository;
  let createNote;

  beforeEach(() => {
    noteRepository = {
      CreateNote: jest.fn(),
    };
    createNote = new CreateNote(noteRepository);
  });

  it("should create a new note", async () => {
    const expectedNote = {
      author: "John Doe",
      author_id: "1234",
      title: "Note Title",
      content: "Note Content",
    };
    noteRepository.CreateNote.mockResolvedValue(expectedNote);

    const note = await createNote.execute(
      "John Doe",
      "1234",
      "Note Title",
      "Note Content"
    );

    expect(note).toEqual(expectedNote);
    expect(noteRepository.CreateNote).toHaveBeenCalledWith(
      "John Doe",
      "1234",
      "Note Title",
      "Note Content"
    );
  });
});
