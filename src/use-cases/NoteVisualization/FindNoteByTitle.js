// Abstraction of Finding Note by Title

export class FindNoteByTitle{
    constructor(noteRepository, title){
        this.noteRepository = noteRepository;
        this.title = title;
    }

    async execute(){
        return this.noteRepository.FindNoteBytitle(this.title);
    }
}