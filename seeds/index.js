const sequelize = require('../config/connection');
const seedUsers = require('./user');
const seedPosts = require('./post');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  process.exit(0);
};

seedAll();