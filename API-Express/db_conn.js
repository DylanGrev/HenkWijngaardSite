let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',  // Changed from 'mysql' to 'localhost'
    user: 'root',
    password: '',
    database: 'henkwijngaardsite'
});

connection.connect(function (err) {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Database connected!");
});

module.exports = connection;