const userList = require('./user.json');
const blogData = require('./blog.json');
const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    await User.bulkCreate(userList, {
        individualHooks: true,
    });

    await Blog.bulkCreate(blogData);

    process.exit(0);
};

seedDatabase();