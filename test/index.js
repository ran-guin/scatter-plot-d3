import { expect } from 'chai';  

import pie from '../dist/index.js';

describe('Data Prep Test', () => {
  
  describe('#checkDefaults()', () => {
    const found = pie.checkDefaults();
    const keys = Object.keys(found)

    const index = keys.indexOf('topMargin') >= 0 ? 'found' : 'not found'

    it('should find canvasId', () => {
      expect(index).to.be.equal('found');
    });

    const custom = pie.checkDefaults({canvasHeight: 333});
    const height = custom.canvasHeight;

    it('retrieves customized canvas Height', () => {
      expect(height).to.be.equal(333);
    });

    const data = [
      {country: 'USA', gdp: 21}, 
      {country: 'China', gdp: 14.9}, 
      {country: 'Japan', gdp: 4.9}, 
      {country: 'Germany', gdp: 3.8}, 
      {country: 'France', gdp: 2.6}
    ];
    const def = pie.checkDefaults({data: data});
    const max = def.maxValue;

    it('retrieves maxValue', () => {
      expect(max).to.be.equal(21);
    });

  });
});
