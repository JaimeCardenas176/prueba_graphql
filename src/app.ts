import { schema} from './schema';
import { carsResolver, personsResolver, carById, personById } from './resolvers';
var graphqlHTTP = require('express-graphql');
var express = require('express');

var { buildSchema } = require('graphql');


var app = express();

var _schema =  buildSchema(schema);

const resolvers = {
        //cars: (root, args, context) => carsResolver(root, args, context),
        cars: (root, args, context) => carsResolver(null, null, null),
        persons: personsResolver,
        carById: carById,
        personById: personById
}

app.use("/", graphqlHTTP({
    
        schema:_schema,
        rootValue: resolvers,
        graphiql:true
    })
);


app.listen(4200,  ()=> console.log("up and running at http://localhost:4200"))