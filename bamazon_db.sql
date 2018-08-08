DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(11) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price FLOAT(5,2) NOT NULL,
  stock_quantity INTEGER(100) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (1221,'Nike Shoes', 'shoe',100.00,50);
INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (4443,'Football', 'sport',30.00,20);
INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (4433,'Tennis Racket', 'sport',200.00,4);
INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (65555,'Socks', 'shoe',5.00,20);
INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (76556,'Plates', 'houseware',25.00,60);
INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (34454,'Beer Mug', 'houseware',10.00,50);
INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (54334,'Toe Ring', 'shoe',400.00,50);
INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (12122,'Spark Plugs', 'auto',20.00,30);
INSERT INTO products (item_id,product_name, department_name,price,stock_quantity) values (43344,'Windsheild Wipers', 'auto',100.00,50);


