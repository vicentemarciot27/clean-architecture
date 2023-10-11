// Marcio Vicente da Silva ~ Marcim T27
// 11/10/2023
// This file contains the Edit Note Title use case, which means it contains the basic structure of
// Note Title editing

export class EditNoteTitle {
    constructor(noteRepository) {
      this.noteRepository = noteRepository;
    }
  
    async execute(id, title) {
      return this.noteRepository.EditNoteTitle(id, title);
    }
  }