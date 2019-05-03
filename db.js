const userModel = require('./models/users')
const addModel  = require('./models/add')
const empModel = require('./models/employees')
//const seatModel = require('.models/manageSeats')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('Assignment','root','monika',{
  host : 'localhost',
  dialect : 'mysql',
})

sequelize
.authenticate()
.then(() => {
  console.log("connected!!!!")
})
.catch(err => {
  console.log("Error:", err)
})
sequelize.sync({})
.then(() => {
  console.log("tables created!!")
})

const user = userModel(sequelize, Sequelize)
const add = addModel(sequelize, Sequelize)
const emp = empModel(sequelize,Sequelize)
//const seats = seatModel(sequelize,Sequelize)

module.exports = {
  user,
  add,
  emp,
  //seats
}
