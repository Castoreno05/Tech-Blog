const Posts = require("./Posts");
const User = require("./User");
const Comments = require('./Comments');
const Drafts = require('./Drafts');

// User.hasMany(Posts, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Posts.belongsTo(User, {
//   foreignKey: "user_id",
// });

Drafts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { Posts, User, Comments, Drafts };
