const express = require("express");
//const { response } = require("express");
const cors = require("cors");
const app = express();
const pool = require("./database.js");
const client = require("./database.js");
const path = require("path");
const logger = require('./config/logger')
const morgan = require('morgan');
const PORT = process.env.PORT || 4000;
app.use(express.json())
app.use(cors())

//create user
app.post("/adduser", (req, res) => {
  const create_username = req.body["username"]
  const create_password = req.body["password"]
  const create_email = req.body["email@example.com"]
  const create_first_name = req.body["first_name"]
  const create_last_name = req.body["last_name"]
  const create_phone_number = req.body["phone_number"]
  const create_address = req.body["address"]
  const create_role = req.body["role"]
  const create_create_date = req.body["create_date"]

  const insertSTMT = `INSERT INTO  accounts (username, password, email, first_name, last_name, phone_number, address, role, create_date)
   
VALUES ( '${create_username}',  '${create_password}', '${create_email}','${create_first_name}','${create_last_name}', '${create_phone_number}','${create_address}','${create_role}','${create_create_date}');
    `
  pool
    .query(insertSTMT)
    .then((response) => {
    console.log("data saved");
    console.log(response);
  })
    .catch((err) => {
    console.log(err);
  });

  console.log(req.body);
  res.send("response Recieved: " + req.body);
});



//read user
client.connect();

user_id = 9

app.get('/getuser', (req, res)=>{
  client.query(`select * from accounts where user_id = ${user_id}`,(err, result)=>{
    if(!err){
      res.send(result.rows);
      //const username = result.rows[0].username
      const password = result.rows[0].password
      const email = result.rows[0].email
      const first_name = result.rows[0].first_name
      const last_name = result.rows[0].last_name
      const phone_number = result.rows[0].phone_number
      const address = result.rows[0].address
      const role = result.rows[0].role
      const create_date = result.rows[0].create_date
      const hash = result.rows[0].hash

      let user = [ password, email, first_name, last_name, phone_number, address, role, create_date, hash]

        console.log(user)

    }else{
      console.log(err)
    }
    //const retrievedUserDataObject = JSON.parse(retrievedUserData)
    //console.log("retrievedUserDataObject: " + retrievedUserDataObject)

  })
  client.end;
})


//update user


//delete user







// app.post("/getuserpost", (req, res) => {
//   res.send("res.send portion of app.post")
// });

app.listen(4000, () => console.log(`server on localhost: ${PORT}`))

// //an app.get request
// app.get("/adduser",(req,res) => {
//   //how we handle the request
//   console.log(req.body)
//   res.send("Response Recieved: " + req.body)
//   })

// app.get('/adduser',(req,res) => {
//   console.log(req.body)
//   res.send("Response Recieved: " + req.body)
// })


const morganMiddleware = morgan(
  'tiny',
  {
    stream:{
      write: (message) => logger.http(message.trim())
    }
  }
)

// app.use(morganMiddleware)

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json())

// Handle GET requests to /api route
app.get("/api", (req, res) => {
 logger.log('debug','in/api');
  res.json({ message: "Hello from server!" });
});