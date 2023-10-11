// Marcio Vicente da Silva ~ Marcim T27
// 11/10/2023
// This file contains the CreateNote use case, which means that it contains the basic structure of note
// creation

export class CreateNote {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  async execute(title) {
    return this.noteRepository.CreateNote(title);
  }
}
