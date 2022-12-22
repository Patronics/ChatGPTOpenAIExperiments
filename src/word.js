'use strict';

class Word {
  createDocument() {
    // Create a new document with default formatting
    const doc = new Document();
  }

  openDocument(file) {
    // Open the specified file
    const doc = new Document();
    doc.open(file);
  }

  saveDocument() {
    // Save the current document with its current file name
    const doc = new Document();
    doc.save();
  }

  saveDocumentAs(file) {
    // Save the current document with a new name
    const doc = new Document();
    doc.saveAs(file);
  }
}

module.exports = Word;
