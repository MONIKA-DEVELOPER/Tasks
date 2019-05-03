module.exports = (sequelize,type) => {
  return sequelize.define('manageSeats',{
    id : {
      type : type.INEGER,
      autoIncrement : true,
      primaryKey : true
    },
    email : type.STRING,
    name : type.STRING,
    seatNo : type.INTEGER,
    date : type.INTEGER
  })
}
