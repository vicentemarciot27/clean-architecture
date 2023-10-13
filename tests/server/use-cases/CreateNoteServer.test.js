import request from "supertest";
import app from "../../../src/frameworks/express/app";
import { DateAdapter } from "../../../src/interfaces/adapters/Date/DateAdapter";

describe("Note Controller", () => {
  let noteRepository;

  beforeEach(() => {
    noteRepository = {
      CreateNote: jest.fn(),
    };
  });

  describe("POST /notes/CreateNote", () => {
    it("should create a new note and return 201", async () => {
      const dateAdapter = new DateAdapter();
      const expectedNote = {
        id: 1,
        author: "John Doe",
        author_id: "1234",
        title: "Note Title",
        content: "Note Content",
        creationDate: dateAdapter.getCurrentDate(),
        lastModifiedDate: null,
      };
      noteRepository.CreateNote.mockResolvedValue(expectedNote);

      const response = await request(app).post("/notes/CreateNote").send({
        author: "John Doe",
        author_id: "1234",
        title: "Note Title",
        content: "Note Content",
      });

      expect(response.status).toBe(201);

      // Check if creationDates are in the same minute
      expect(
        dateAdapter.isInSameMinute(
          response.body.creationDate,
          expectedNote.creationDate
        )
      ).toBe(true);

      // Ignore creationDate for direct equality check
      const { creationDate, ...responseBodyWithoutDate } = response.body;
      const { creationDate: expectedCreationDate, ...expectedNoteWithoutDate } =
        expectedNote;

      expect(responseBodyWithoutDate).toEqual(expectedNoteWithoutDate);
    });
  });
});
