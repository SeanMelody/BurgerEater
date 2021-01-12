// Const for MySQL!
const mysql = require("mysql");

// Connect to the Database!
const connection = mysql.createConnection({
    host: 'localhost',
    // My port; if not 3306
    port: 3306,
    // my username
    user: 'root',
    // my super secret password
    password: 'password',
    // Use the burgers_db database
    database: 'burgers_db',
});

// Make connection.
connection.connect((err) => {
    if (err) {
        // Console log any errors
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    // Console log the connection ID
    console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
