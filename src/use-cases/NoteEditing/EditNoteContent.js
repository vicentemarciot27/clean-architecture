// Marcio Vicente da Silva ~ Marcim T27
// 11/10/2023
// This file contains the Edit Note Content use case, which means it contains the basic structure of
// Note Content editing

export class EditNoteContent {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  async execute(id, content) {
    return this.noteRepository.EditContent(id, content);
  }
}
