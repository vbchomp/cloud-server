

'use strict'

const validator = require('../src/middleware/validator.js');

// testing middleware
describe('name validator middleware', () => {
  
  it('rejects requests without a name', () => {
    let req = { query: {} };
    let res = { };
    //spy on next method
    let next = jest.fn(); 

    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('Name Required');
    });

} );


