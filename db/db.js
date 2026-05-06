const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node_demo"
});

connection.connect((err) => {
    if (err) {
        console.log("DB Connection Failed:", err);
    } else {
        console.log("MySQL Connected Successfully");
    }
});

module.exports = connection;