"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
var graphqlHTTP = require('express-graphql');
var express = require('express');
var { buildSchema } = require('graphql');
var app = express();
var _schema = buildSchema(schema_1.schema);
const resolvers = {
    //cars: (root, args, context) => carsResolver(root, args, context),
    cars: (root, args, context) => resolvers_1.carsResolver(null, null, null),
};
app.use("/", graphqlHTTP({
    schema: _schema,
    rootValue: resolvers,
    graphiql: true
}));
app.listen(4200, () => console.log("up and running at http://localhost:4200"));
//# sourceMappingURL=app.js.map