const { Comment } = require('../models')

const CommentData = [
    {
        "comment": "word",
        "date_created": new Date ('2023-12-23'),
        "user_id": 2,
        "post_id": 1,
    }
];

const seedComments = () => Comment.bulkCreate(CommentData);

module.exports = seedComments;