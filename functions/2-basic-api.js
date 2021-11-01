const items = require("../assets/data");

exports.handler = async (event, content, cb) => {
  // console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(items)
  };
};
 