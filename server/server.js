const express = require("express");
const cors = require("cors")
const app = express();

// const path = require("path");
// const logger = require('./config/logger')
// const morgan = require('morgan')
const PORT = process.env.PORT || 4000;

//MIDDLEWARE

app.use(express.json())
app.use(cors())

app.get("/adduser", (req, res) => {
  console.log(req.body)
  res.send("response Recieved: " + req.body)

})

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

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));
// app.use(express.json())

// // Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   logger.log('debug','in/api');
//   res.json({ message: "Hello from server!" });
// });

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