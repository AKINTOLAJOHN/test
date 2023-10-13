const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

test('makeGraphQLRequest to update users', async () => {
    const query = `
    mutation {
      updateOneDriver(input: { id: "1", update: {
        lastName : "john",
        status : WaitingDocuments,
        gender: Male,
        
      } }) {
      
        firstName
      }
    }
    `;
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjk3MjM5Nzg3fQ.gID58yHubOixV2vPSN68Jj41m0gpLT-yK_0uYcCRGFo',
    };

    const responseMock = {
      "data": {
        "updateOneDriver": {
    
        },
      },
    };

    

    const response = await axios.post("http://127.0.0.1:3001/graphql", { query: query }, { headers });
    expect(response.data).toMatchObject(responseMock);
  });

