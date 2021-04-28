//creating seeding for user table egon 04/28/2021
const sequelize = require('../config/connection');
const { User, Project } = require('../models');
const userData = require('./userData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
  seedDatabase();