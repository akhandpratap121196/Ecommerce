// database connectivity
var mysql= require('mysql');

//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Akhandbhu@11',
    database:'ecommerce'
});

connection.connect(function(err){
    if(err) throw err;

});

module.exports=connection;