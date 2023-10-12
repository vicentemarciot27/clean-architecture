// Marcio Vicente da Silva ~ Marcim T27
// 11/10/2023
// This file contains the Note entity, which means that it contains the basic structure of
// what the project considers to be a Note


export default class Note{
    constructor(id, author, author_id, title, content, creationDate, lastModifiedDate = null){
        this.id = id;
        this.author = author;
        this.author_id = author_id;
        this.title = title;
        this.content = content;
        this.creationDate = creationDate;
        this.lastModifiedDate = lastModifiedDate;
    }
}
