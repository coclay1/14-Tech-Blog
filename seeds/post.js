const { Post } = require('../models');

const postData = [
    {
        title: 'MVC',
        body: 'MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code.',
        user_id: 1
    },
    {
        title: 'Handlebars',
        body: 'Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.',
        user_id: 2
    },
    {
        title: 'Sequelize',
        body: 'Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more.',
        user_id: 3
    },
    {
        title: 'JavaScript',
        body: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web',
        user_id: 4
    },
    {
        title: 'Express.js',
        body: 'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js',
        user_id: 5
    }
];;

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts