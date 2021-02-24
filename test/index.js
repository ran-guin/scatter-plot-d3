import { expect } from 'chai';  

import dataPrep from '../dist/index.js';

describe('Data Prep Test', () => {
  
  describe('#test()', () => {
    it('module loaded', () => {
      const found = dataPrep.test();
      expect(found).to.be.equal('ok');
    });
  });
});
