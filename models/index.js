const User = require("./users");
const Posts = require("./posts");
const { belongsTo } = require("./users");

User.hasMany(Posts, {
  foreignKey: "user_id",
});

Posts.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Posts };
