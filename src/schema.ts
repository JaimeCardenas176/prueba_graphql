

export const schema = 
`
enum CarState{
    UNUSABLE,
    OLD,
    NEW
}

type Car{
    model: String!
    plate: ID!
    year: String!
    state: CarState
}

type Person{
    id:ID!
    name: String!
    age: Int!
    cars: [Car]
}

type Query{
    cars: [Car]!
    persons: [Person]
    carById(id: ID!): Car
    personById(id: ID!): Person
}
`;