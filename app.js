const express = require('express')
const app = express()
const { user,add,emp} = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')
app.set('views','./views')

app.get('/',function(req,res){
  res.render('login')
})

app.post('/login',function(req,res){
  //console.log(req.body)
  user.findOne({where:{username : req.body.username,password :req.body.password}})
  .then(function(data){
   console.log(data)
   if(data != null ){
     res.render('dashboard')
   }
  })
  .catch(function(err){
    console.log(err)
  })
})

app.get('/OfficeManagement',function(req,res){
  add.findAll()
  .then(function(data){
    res.render('manageOffice',{data : data})
  })
  .catch(function(err){
    console.log(err)
  })
})

app.get('/ManageSeats',function(req,res){
  add.findAll()
  .then(function(data){
       emp.findAll()
       .then(function(empData){
         res.render('manageSeats', { data : data , empData :empData })
       })
  })
  .catch(function(err){
    console.log(err)
  })
})

app.post('/add',function(req,res){
  console.log(req.body)
  add.create({
    officeName : req.body.officeName,
    seats : req.body.seats,
  })
  .then(function(addedData){
    console.log('added record')
    res.redirect('/OfficeManagement')
  })
  .catch(function(err){
    console.log(err)
  })
})

app.get('/edit/:id',function(req,res){
  add.findOne({where : { id : req.params.id }})
  .then(function(data){
    if(data == null){
      console.log('something went wrong')
    }
    else{
      res.render('edit',{ data : data})
    }
  })
  .catch(function(err){
    console.log(err);
  })
})

app.post('/edit/:id',function(req,res){
  console.log(req.params.id);
  console.log(req.body);
  add.update({
    officeName : req.body.officeName,
    seats : req.body.seats,
  },
  {where : {id : req.params.id } }
)
.then(function(data){
  console.log('data updated',data)
  res.redirect('/OfficeManagement')
})
.catch(function(err){
  console.log(err)
})
})

app.get('/delete/:id',function(req,res){
  add.destroy({
    where : {
      id : req.params.id,
    }
  })
    .then(function(data){
      console.log('Record Deleted')
      res.redirect('/OfficeManagement')
    })
    .catch(function(err){
      console.log(err)
    })
})
app.listen('3000',console.log('hii i am listening on port number 3000'))
