const { response } = require("express");
const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: "5432",
    database: "yt_login_system"
});

// const createTblQuery = `CREATE TABLE accounts(
//     user_id serial PRIMARY KEY,
//     usermane VARCHAR (50) UNIQUE NOT NULL,
//     password VARCHAR (50) UNIQUE NOT NULL);`

//  pool.query(createTblQuery)
// .then((Response) => {
//     console.log("Table Created")
//     console.log(response)
// })
// .catch((err) => {
//     console.log("err");
// });

module.exports = pool