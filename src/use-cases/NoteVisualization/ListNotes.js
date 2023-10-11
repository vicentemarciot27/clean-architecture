// Marcio Vicente da Silva ~ Marcim T27
// 11/10/2023
// This file contains the List Notes use case, which means that it contains the basic structure of 
// how a user can view all notes they have access to

export class ListNotes {
    constructor(noteRepository) {
      this.noteRepository = noteRepository;
    }
  
    async execute() {
      return this.noteRepository.ListNotes();
    }
  }