const jwt = require('jsonwebtoken');

// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '7200000';

module.exports = {
  // Function for authenticating routes
  parseAdmin: async (req) => {
    let token = req.headers.authorization?.split(' ').pop().trim() || req.query.token;

    if (!token) {
      return null;
    }

    try {
      const { data: admin } = await jwt.verify(token, secret, { maxAge: expiration });
      return admin
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }

  },
  signToken: function ({ name, email, _id }) {
    const payload = { name, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
