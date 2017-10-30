var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table")

var connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "customers_db"
}); 

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});


function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log('Products Available for sale in Bamazon');
    console.table(res);
  });
};

var start = function() {
	console.log('\n ');
	inquirer.prompt({
		name: "purchaseOrExit",
		type: "rawlist",
		message: "Would you like to [PURCHASE] an item ot [EXIT]",
		choices: ["PURCHASE", "EXIT"]
	}).then(function(answer) {
		if (answer.purchaseOrExit.toUpperCase() === "PURCHASE")
			makePurchase();
	  	else { console.log("Thank you for shopping with Bamazon come back and shop with us soon");
	  		connection.end();

	  	}
		
	});

};
