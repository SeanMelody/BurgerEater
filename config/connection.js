// Const for MySQL!
const mysql = require("mysql");

//JawsDB for Heroku
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Connect to the Database!
    connection = mysql.createConnection({
        host: 'localhost',
        // My port
        port: 3306,
        // my username
        user: 'root',
        // my super secret password
        password: 'password',
        // Use the burgers_db database
        database: 'burgers_db',
    });
}

// Make the connection.
connection.connect((err) => {
    if (err) {
        // Console log any errors
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    // Console log the connection ID
    console.log(`connected as id ${connection.threadId}`);
});

// Always gotta module.export
module.exports = connection;
