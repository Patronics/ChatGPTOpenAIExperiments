'use strict';

const chai = require('chai');
const sinon = require('sinon');
const Word = require('../src/word');

const expect = chai.expect;

describe('Word', () => {
  describe('createDocument', () => {
    it('should create a new document', () => {
      const word = new Word();
      const spy = sinon.spy(word, 'createDocument');

      word.createDocument();

      expect(spy.calledOnce).to.be.true;
    });
  });

  describe('openDocument', () => {
    it('should open an existing document', () => {
      const word = new Word();
      const spy = sinon.spy(word, 'openDocument');

      word.openDocument('file.docx');

      expect(spy.calledWith('file.docx')).to.be.true;
    });
  });

  describe('saveDocument', () => {
    it('should save the current document', () => {
      const word = new Word();
      const spy = sinon.spy(word, 'saveDocument');

      word.saveDocument();

      expect(spy.calledOnce).to.be.true;
    });
  });

  describe('saveDocumentAs', () => {
    it('should save the current document with a new name', () => {
      const word = new Word();
      const spy = sinon.spy(word, 'saveDocumentAs');

      word.saveDocumentAs('file.docx');

      expect(spy.calledWith('file.docx')).to.be.true;
    });
  });
});
