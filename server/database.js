 //const { response } = require("express");
const { Pool } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: "5432",
    database: "yt_login_system"
});

module.exports = pool

const { Client } = require("pg")

const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: "5432",
    database: "yt_login_system"
});

module.exports = client