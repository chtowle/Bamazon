// setup server and required packages
var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "chuckchuck123",
    database: "bamazon_db"
});
// setup connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

//list item for sale and prompt user for purchase
function start() {
    //display all products
    readAllProduct();
    //prompt user for item to buy
    inquirer.prompt([{
        name: "choice",
        message: "What do you want to buy: enter product ID",
    }]).then(function (ans) {
        // find item
        connection.query("SELECT * FROM product", function (err, res) {
            if (err) throw err;
            let currentInv = 0;
            for (let i = 0; i < res.length; i++) {
                if (res[i].item_id === ans.choice) {
                    currentInv = res[i].stock_quantity;
                }
            }
            console.log("There are currently" + currentInv);
            // ask how many to purchase
            inquirer.prompt([{
                name: "quant",
                message: "How many do you want to purchase?"
            }]).then(function (answer) {
                // check if available and update db
                if (answer.quant < currentInv) {
                    console.log("Purchased!");
                    currentInv = currentInv - answer.quant
                    connection.query(
                        "UPDATE product SET ? WHERE ?", [{
                                stock_quantity: currentInv
                            },
                            {
                                item_id: ans.choice
                            }
                        ],
                        function (err, res) {
                            console.log(res.affectedRows + " products updated!\n")
                            connection.end();
                        })
                } else {
                    console.log("Low inventory--not purchased");
                    connection.end();
                }

            })

        });
    })
}

function readAllProduct() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        console.log("\n")
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].product_name + ": " + " | price: $" + res[i].price + " Product ID: " + res[i].item_id);
        }
    });
}