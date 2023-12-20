const { Post } = require('../models')

const PostData = [
    {
      "name": "Handlebars",
      "description": "Great way to organize your HTML",
      "date_created": 2023-12-19,
      "user_id": "1",
    },
    {
      "name": "eslint",
      "description": "Great way to keeo your conde consistent",
      "date_created": 2023-12-20,
      "user_id": "2",
    },
    {
      "name": "Handlebars",
      "description": "Great way to organize your HTML",
      "date_created": 2023-12-21,
      "user_id": "3",
    },
    
]

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;