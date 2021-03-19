const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type RootQuery {
        hello: String
    }

    type RootMutation {
        test(name: String): String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
