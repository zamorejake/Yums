const typeDefs = `
  type Admin {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  input RestaurantInput {
    name: String!
    address: String!
    city: String!
    state: String!
    zipcode: String!
    phonenumber: String!
    description: String!
  }

  type Restaurant {
    _id: ID!
    name: String!
    address: String!
    city: String!
    state: String!
    zipcode: String!
    phonenumber: String!
    description: String!
  }

  input EntreeInput {
    name: String!
    description: String!
    price: Float!
    in_stock: Boolean!
    allergy: Boolean!
    image: String
  }

  type Entree {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    in_stock: Boolean!
    allergy: Boolean!
    image: String
  }

  input BeverageInput {
    name: String!
    description: String!
    price: Float!
    in_stock: Boolean!
    has_alcohol: Boolean!
    image: String
  }

  type Beverage {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    in_stock: Boolean!
    has_alcohol: Boolean!
    image: String
  }

  type Auth {
    token: ID!
    admin: Admin
  }

  type Query {
    admin: [Admin]
    restaurants: [Restaurant]
    entrees: 
    beverages:
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createRestaurant( restaurant : RestaurantInput ): Restaurant
    createEntree( entree: EntreeInput): Entree
    createBeverage( beverage: BeverageInput): Beverage
    removeRestaurant(restaurantId: ID!): Restaurant
    removeEntree(entreeId: ID!): Entree
    removeBeverage(BeverageId: ID!): Beverage
    updateRestaurant(id: ID!, restaurant: RestaurantInput): Restaurant
    updateEntree(id: ID!, entree: EntreeInput): Entree
    updateBeverage(id: ID!, beverage: BeverageInput): Beverage
  }
`;

module.exports = typeDefs;



type Query {
  tech: [Tech]
  matchups(_id: String): [Matchup]
}

type Mutation {
  createMatchup(tech1: String!, tech2: String!): Matchup
  createVote(_id: String!, techNum: Int!): Matchup
}