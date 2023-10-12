import { ListNotes } from "../../src/use-cases/NoteVisualization/ListNotes";

describe('ListNotes', () => {
    it('should return an empty array when there are no notes', async () => {
        // Arrange
        const noteRepository = {
            ListNotes: jest.fn().mockResolvedValue([]),
        };
        const listNotes = new ListNotes(noteRepository);

        // Act
        const result = await listNotes.execute();

        // Assert
        expect(result).toEqual([]);
        expect(noteRepository.ListNotes).toHaveBeenCalledTimes(1);
    });

    it('should return an array of notes when there are notes', async () => {
        // Arrange
        const notes = [
            { id: 1, title: 'Note 1', content: 'Content 1', author: 'John Doe', author_id: '1234' },
            { id: 2, title: 'Note 2', content: 'Content 2', author: 'John Doe', author_id: '1234' },
        ];
        const noteRepository = {
            ListNotes: jest.fn().mockResolvedValue(notes),
        };
        const listNotes = new ListNotes(noteRepository);

        // Act
        const result = await listNotes.execute();

        // Assert
        expect(result).toEqual(notes);
        expect(noteRepository.ListNotes).toHaveBeenCalledTimes(1);
    });
});
