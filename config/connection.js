var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'd13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'an65oxmmf0qvi2qt',
        password: 'c9rlbsevh07xga1r',
        database: 's07hl4i6ttcczqja'
    })
};

connection.connect();
module.exports = connection;