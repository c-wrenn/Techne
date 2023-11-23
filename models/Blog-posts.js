const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogposts extends Model {}

//data templete for how blog posts will be stored
Blogposts.init(
    {
      id: {//gives each blog posts an id
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },//display users username on post
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postTitle:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      postText: 
      {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, //avoids spam blog posts
        
      },
     
      

    },
    {
      hooks: {
        async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );
  //export model
  module.exports = Blogposts;