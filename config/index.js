const DB = "chat";
const DB_USER = "ahsan";
const DB_PASS = "xshuZ8COLgL09x3n";

module.exports = {
  // Server Related Config
  SERVER_PORT: 3020,

  // MongoDB Related Config
  MONGODB_URI: `mongodb+srv://${DB_USER}:${DB_PASS}@ivylab.x3o5y.mongodb.net/${DB}?retryWrites=true&w=majority`,
  DB_DETAILS: {
    DB: DB,
    DB_USER: DB_USER,
    DB_PASS: DB_PASS,
  },

  // GraphQL Realated Config
  GRAPHQL_URL: "/graphql",

  // JWT Related Config
  JSON_WEB_TOKEN_SECRET:
    "JSON_WEB_TOKEN_SECRET, this should be uniqe and long for security reasons.",

  // Request Related Config
  HEADER_AUTH_KEY: "X-Authorization",
};
