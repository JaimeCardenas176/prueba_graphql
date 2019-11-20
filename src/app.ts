import { schema} from './schema';
import { resolvers } from './resolvers';
var graphqlHTTP = require('express-graphql');
var express = require('express');

var { buildSchema } = require('graphql');


var app = express();

var _schema =  buildSchema(schema);


app.use("/", graphqlHTTP({
        schema:_schema,
        rootValue: resolvers,
        graphiql:true
    })
);


app.listen(4201,  ()=> console.log("up and running at http://localhost:4200"))