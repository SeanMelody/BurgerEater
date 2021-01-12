// Import MySQL connection.
const { query } = require('./connection.js');
const connection = require('./connection.js');


// Most of this code was learned/taken from the Cat In Class Activity
// Helper function
const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

// Convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    // Set arr to empty array
    const arr = [];

    // Loop through
    for (const key in ob) {
        let value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // If string with spaces, add quotations
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            // push to the array
            arr.push(`${key}=${value}`);
        }
    }

    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

// Object for ORM
const orm = {
    // Select all function, using the table input and call back
    selectAll(tableInput, cb) {
        // Select all
        const queryString = `SELECT * FROM ${tableInput};`;
        // Check for all the errors
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            // call back the result
            cb(result);
        });
    },

    // Insert one function for adding a burger
    insertOne(table, columns, values, cb) {
        // Set up the queryString
        let queryString = `INSERT INTO ${table}`;

        queryString += ' (';
        queryString += columns.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(values.length);
        queryString += ') ';

        // Connect to the database and ask the question
        connection.query(queryString, values, (err, result) => {
            // Gotta check em all!
            if (err) {
                throw err;
            }
            // call back the results
            cb(result);
        });
    },

    // Update One function for updating a burger to eaten!
    updateOne(table, objValues, conditions, cb) {
        // Set up the queryString
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objValues);
        queryString += ' WHERE ';
        queryString += conditions;

        // Connect to the database and ask the question
        connection.query(queryString, (err, result) => {
            // Check-check-checking them errors!
            if (err) {
                throw err;
            }
            // Call back the results
            cb(result);
        });
    },


    // BEGIN TEST TO DELETE A BURGER
    // deleteOne(table, condition, cb) {
    //     let queryString = `DELETE FROM ${table}`;

    //     queryString += " WHERE ";
    //     // queryString += "ID";
    //     // queryString += " = "
    //     // queryString += (objColVal);
    //     // queryString += " WHERE ";
    //     queryString += condition;

    //     console.log(queryString);
    //     connection.query(queryString, (err, result) => {
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result)
    //     })
    // },
    // END TEST FOR DELETE BURGER

}





// Gotta Module.Exports
module.exports = orm;