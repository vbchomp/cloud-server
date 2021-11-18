'use strict'

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server.app);

describe('web server', () => {
  
  // this is your 404 not found route
  it('should respond with a 404 invalid route', () => {

    return mockRequest
    .get('/foo')
    .then(results => {
      // console.log(results);
      expect(results.status).toBe(404);
    });
  });

  // this is your 404 for a bad mtheod
  // got this from code review
  it('should respond with a 404 on a bad method', () => {
    return mockRequest
    .post('/person')
    .then(results => {

      expect(results.status).toBe(404);
      expect(results.req.method).toBe('GET');
    });
  });

  // this is the 500 no name
  // it('should respond with a 500 server error', () => {

  //   return mockRequest
  //   .get('/person?name=')
  //   .then(results => {
  //     // console.log(results);
  //     expect(results.status).toBe(500);
  //   });
  // });  
it('should respond with a 500 server error when a name is not entered in route', async () => {
  const data = {
    name: 'test'
  }
  const response = await mockRequest.get('/person');
    expect(response.status).toBe(500);
    expect(response.body.query.value).toBeFalsy();
  });

//  from the code review 
// another way to write the 500 error with not giving it a name
it('should respond with a 500 for a nameless request to a /person', async () => {
  const data = {}
  const response = await mockRequest.get('/person').query(data);
    expect(response.status).toBe(500);
 });




  // this is the 200 valid name and output object is correct
  // stolen with permission from Phil's code
  it('should respond with a 200 if a name is in the query and ', async () => {
    // this sets up a test variable so that whatever nane is put in 'test' is used for the response.
    const data = {
      name: 'test'
    }
    const response = await mockRequest.get('/person').query(data);
    // the 200 will be triggered with test variable
    expect(response.status).toBe(200);
    // test variable is called
    expect(response.body).toEqual(data);
  });


});