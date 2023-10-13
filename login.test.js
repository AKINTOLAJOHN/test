const axios = require('axios');

test('makeGraphQLRequest to the login mutation', async () => {

  const mutation = `
  mutation {
      login(input:{
        firebaseToken : "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTgyNzMyYjk3MWExMzVjZjE0MTZlOGI0NmRhZTA0ZDgwODk0ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGF0cmljay11bm8iLCJhdWQiOiJwYXRyaWNrLXVubyIsImF1dGhfdGltZSI6MTY5NzIzMjI5OSwidXNlcl9pZCI6ImZVU01pbVBiajVkeXRvaEpiY1BobWo1cFRoeDEiLCJzdWIiOiJmVVNNaW1QYmo1ZHl0b2hKYmNQaG1qNXBUaHgxIiwiaWF0IjoxNjk3MjM4MDk1LCJleHAiOjE2OTcyNDE2OTUsInBob25lX251bWJlciI6IisyMzQ4MTQwNTQxNTQxIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrMjM0ODE0MDU0MTU0MSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.jUlUv3yrgAEcacFg7oDE2haCiZW8yvGr1hk0XHLFm6NMgsHMgdjfnFVpEjrgLHP3lkLs4mbqKudM4Fwjkv6dZe9mwQsVVITixivt8KvJToDRZsHlcE825C0Vv5yeJUoiuy0q9vhWkYBjcJ0mvEN96U3I3DgwBa1rxbCxeDfFTGObyWeyY-Hv602sqiLrU247DSvjI7Py4jMTE1JGG61Q-2G9NhJCW7gqg-qxQDXfk4vZVWJfdC3j4sxPrHI5aYC0pl86ygE8VeVAlktqebhfQzzOi02dlUQ-fnY7DXJH1AAvHgxyqthtYFLHI2t9AiUMOqMUW4G6S0f45nxiJCQorA"

      }){
        jwtToken
      }
    }
  `

  const responseMock = {
    "data": {
      "login": {
  
      },
    },
  };
  
  const response = await axios.post('http://127.0.0.1:3001/graphql', {query : mutation});
  expect(response.data).toMatchObject(responseMock);

});
