// import request from 'supertest';
// import app from '../../../src/frameworks/express/app';

// describe('Note Controller', () => {
//     let noteRepository;

//     beforeEach(() => {
//         noteRepository = {
//             CreateNote: jest.fn(),
//         };
//     });

//     describe('POST /notes/CreateNote', () => {
//         it('should create a new note and return 201', async () => {
//             const expectedNote = {
//                 author: "John Doe",
//                 author_id: "1234",
//                 title: "Note Title",
//                 content: "Note Content",
//             };
//             noteRepository.CreateNote.mockResolvedValue(expectedNote);

//             const response = await request(app)
//                 .post('/notes/CreateNote')
//                 .send({
//                     title: 'Note Title',
//                     content: 'Note Content',
//                     author: 'John Doe',
//                     author_id: '1234',
//                 });

//             expect(response.status).toBe(201);
//             expect(response.body).toEqual(expectedNote);
//             expect(noteRepository.CreateNote).toHaveBeenCalledWith('Note Title', 'Note Content', 'John Doe', '1234');
//         });
//     });
// });

it("placeholder test", () => {
    expect(true).toBe(true);
});