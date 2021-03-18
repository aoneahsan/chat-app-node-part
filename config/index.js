module.exports = {
  // Server Related Config
  SERVER_PORT: 3000,

  // MongoDB Related Config
  MONGODB_URI: `mongodb+srv://${this.DB_DETAILS.DB_USER}:${this.DB_DETAILS.DB_PASS}@ivylab.x3o5y.mongodb.net/${this.DB_DETAILS.DB}?retryWrites=true&w=majority`,
  DB_DETAILS: {
    DB: "chat",
    DB_USER: "ahsan",
    DB_PASS: "xshuZ8COLgL09x3n",
  },

  // GraphQL Realated Config
  GRAPHQL_URL: "/grapql",

  // JWT Related Config
  JSON_WEB_TOKEN_SECRET:
    "JSON_WEB_TOKEN_SECRET, this should be uniqe and long for security reasons.",

  // Request Related Config
  HEADER_AUTH_KEY: "X-Authorization",
};
