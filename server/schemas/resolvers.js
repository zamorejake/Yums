const { Admin, Beverage, Entree, Restaurant } = require('../models');

const resolvers = {
  Query: {

    beverages: async (parent, { filter }) => {
      return Beverage.find(filter || {});
    },
    entrees: async (parent, { filter }) => {
      return Entree.find(filter || {});
    },
    restaurants: async () => {
      return Restaurant.find({});
    },
  },

  Mutation: {
    /*
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    */

    login: async (parent, { email, password }) => {
      const admin = await Admin.findOne({ email });

      if (!admin) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(admin);

      return { token, admin };
    },

    createBeverage: async (parent, args, context) => {

      if (!context) {
        throw AuthenticationError;
      }
      const beverage = await Beverage.create(args);
      return beverage;
    },
    createEntree: async (parent, args, context) => {

      if (!context) {
        throw AuthenticationError;
      }

      const entree = await Entree.create(args);
      return entree;
    },
    createRestaurant: async (parent, args, context) => {

      if (!context) {
        throw AuthenticationError;
      }

      const restaurant = await Restaurant.create(args);
      return restaurant;
    },

    removeBeverage: async (parent, { beverageId }, context) => {

      if (!context) {
        throw AuthenticationError;
      }

      return Beverage.findOneAndDelete({ _id: beverageId });
    },
    removeEntree: async (parent, { entreeId }, context) => {

      if (!context) {
        throw AuthenticationError;
      }

      return Entree.findOneAndDelete({ _id: entreeId });
    },
    removeRestaurant: async (parent, { restaurantId }, context) => {

      if (!context) {
        throw AuthenticationError;
      }

      return Restaurant.findOneAndDelete({ _id: restaurantId });
    },

    updateBeverage: async (parent, { beverageId }, context) => {

      if (!context) {
        throw AuthenticationError;
      }

      return Beverage.findOneAndDelete({ _id: beverageId });
    },
    updateEntree: async (parent, { entreeId }, context) => {

      if (!context) {
        throw AuthenticationError;
      }

      return Entree.findOneAndDelete({ _id: entreeId });
    },
    updateRestaurant: async (parent, { restaurantId }, context) => {

      if (!context) {
        throw AuthenticationError;
      }

      return Restaurant.findOneAndDelete({ _id: restaurantId });
    },

    /*
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
    */

  },
};

module.exports = resolvers;