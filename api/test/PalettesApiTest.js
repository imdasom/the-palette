process.env.NODE_ENV = 'test';

const should = require('should');
let chai = require('chai');
let chaiHttp = require('chai-http');
const PalettesApi = require('api/PalettesApi');

chai.use(chaiHttp);
describe('PalettesApi Test', function() {
  if('create palette', function() {
    const palette = {
      author: 'daim'
      ,name: 'spring color'
      ,items: [
        {
          type: 'COLOR'
          ,content: {
            hex: 'FEC1CA'
          }
        }
        ,{
          type: 'COLOR'
          ,content: {
            hex: 'F9CD9C'
          }
        }
        ,{
          type: 'COLOR'
          ,content: {
            hex: 'CCF79B'
          }
        }
        ,{
          type: 'COLOR'
          ,content: {
            hex: '82B6EE'
          }
        }
      ]
    };
    const id = PalettesApi.create(palette);
    id.should.equal(1);
  });
});