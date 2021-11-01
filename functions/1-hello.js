// domain/.netlify/functions/1-hello

// const person = { name: "gilsun" };

exports.handler = async (event, content, cb) => {
  // console.log(event)
  return {
    statusCode: 200,
    body: "First netlify function example",
  };
};
