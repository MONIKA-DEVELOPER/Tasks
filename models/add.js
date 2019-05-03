module.exports = (sequelize,type) => {
  return sequelize.define('offices',{
    id:{
      type: type.INTEGER,
      primaryKey : true,
      autoIncrement : true,
    },
    officeName : type.STRING,
    seats : type.INTEGER,
  })
}
