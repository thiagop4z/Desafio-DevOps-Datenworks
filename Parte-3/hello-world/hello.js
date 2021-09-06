// Desafio DevOps Datenworks :: Thiago Paz //

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  let responseMessage = 'Hello Datenworks!';

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}
