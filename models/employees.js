module.exports = (sequelize,type) => {
  return sequelize.define('employees',{
    id : {
      type : type.INTEGER,
      autoIncrement : true,
      primaryKey : true
    },
    email : type.STRING,
    name  : type.STRING,
  })
}
