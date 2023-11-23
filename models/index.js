const User = require('./User');
const Blogposts = require('./Blog-posts');

User.hasMany(Blogposts, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Blogposts.belongsTo(User, {
  foreignKey: 'id'
});

module.exports = { User, Blogposts };
