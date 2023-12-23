const { Post } = require('../models')

const PostData = [
  {
    "name": "Handlebars",
    "description": "Great way to organize your HTML",
    "date_created": new Date ('2023-12-19'),
    "user_id": 1,
  },
  {
    "name": "eslint",
    "description": "Great way to keep your code consistent",
    "date_created": new Date ('2023-12-20'),
    "user_id": 1,
  },
  {
    "name": "prettier",
    "description": "Great way to format your code",
    "date_created": new Date ('2023-12-21'),
    "user_id": 1,
  },
];

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;