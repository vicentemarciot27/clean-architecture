// Abstraction of Finding Note by ID

export class FindNoteByID{
    constructor(noteRepository, id){
        this.noteRepository = noteRepository;
        this.id = id;
    }

    async execute(){
        return this.noteRepository.FindNoteByID(this.id);
    }
}