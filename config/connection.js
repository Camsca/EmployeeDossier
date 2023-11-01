const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',//127.0.0.1
    user:'root',
    password:'thewolve311=',
    database:'employeeDB'

}).promise();

module.exports=connection;