const express = require("express");
//const { response } = require("express");
const cors = require("cors");
const app = express();
const pool = require("./database.js");
const path = require("path");
const logger = require('./config/logger')
 const morgan = require('morgan');
const { response } = require("express");
const PORT = process.env.PORT || 4000;
app.use(express.json())
app.use(cors())

//add user
app.post("/adduser", (req, res) => {
  const username = req.body["username"]
  const password = req.body["password"]
  const email = req.body["email@example.com"]
  const first_name = req.body["first_name"]
  const last_name = req.body["last_name"]
  const phone_number = req.body["phone_number"]
  const address = req.body["address"]
  const role = req.body["role"]
  const create_date = req.body["create_date"]

  const insertSTMT = `INSERT INTO  accounts (username, password, email, first_name, last_name, phone_number, address, role, create_date)
   
VALUES ( '${username}',  '${password}', '${email}','${first_name}','${last_name}', '${phone_number}','${address}','${role}','${create_date}');
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


//a request to read user data?

app.get("/getuser", (req, res) => {

   const user_id =  req.body["current_user_id"]

  const querySTMNT = `select * from accounts where user_id = ${user_id}`

  pool
  .query(querySTMNT)
  .then((response) => {
  console.log(response);
})
  .catch((err) => {
  console.log(err);
});
res.send(
  "req.body is: " + req.body 
+ "serched for user_id: " + user_id 
+ " response is: " + response + 
"role is: " + role);
});

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


// const morganMiddleware = morgan(
//   'tiny',
//   {
//     stream:{
//       write: (message) => logger.http(message.trim())
//     }
//   }
// )

// app.use(morganMiddleware)

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json())

// Handle GET requests to /api route
app.get("/api", (req, res) => {
 logger.log('debug','in/api');
  res.json({ message: "Hello from server!" });
});

// app.post('/rating',(req,res)=>{
//  const value = req.body.rating
// const rating = Number(value)
// if(isNaN(value)){
//   logger.log('error',`${value} not a number`);
// }else if (rating <1 || rating >5){
//   logger.error(`${value} out of range`);
// }else if(!Number.isInteger(rating)){
//   logger.warn(`${value} is not an Integer`)
// }else {
//   logger.debug(`${value} is valid`)
// }
//  res.status(200).json({"rating":value})
// })
// app.listen(PORT, () => {
//   logger.info(`Server listening on ${PORT}`);
// });