'use strict';

const program = require('commander');
const Word = require('./word');

program
  .version('1.0.0')
  .description('Microsoft Word command-line interface')
  .arguments('<file>')
  .option('-c, --create', 'Create a new document')
  .option('-o, --open <file>', 'Open an existing document')
  .option('-s, --save', 'Save the current document')
  .option('-S, --save-as <file>', 'Save the current document with a new name')
  .parse(process.argv);

if (program.create) {
  const word = new Word();
  word.createDocument();
  console.log('Document created');
} else if (program.open) {
  const word = new Word();
  word.openDocument(program.open);
  console.log(`Document ${program.open} opened`);
} else if (program.save) {
  const word = new Word();
  word.saveDocument();
  console.log('Document saved');
} else if (program.saveAs) {
  const word = new Word();
  word.saveDocumentAs(program.saveAs);
  console.log(`Document saved as ${program.saveAs}`);
} else {
  console.error('Invalid command');
  process.exit(1);
}
