// const { response } = require("express");
const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: "5432",
    database: "capstoneII"
});

module.exports = pool