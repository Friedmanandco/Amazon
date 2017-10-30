-- Creates the "cuatomers_db" database --
CREATE DATABASE customers_db;

-- Makes it so all of the following code will affect customers_db --
USE customers_db;

-- Creates the table "products" within customers_db --
CREATE TABLE products(
  `item_id` int(11) NOT NULL,
  `product_name` varchar(30) DEFAULT NULL,
  `department_name` varchar(30) DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  `stock_quanity` int(20) DEFAULT NULL );




INSERT INTO `products` VALUES (112,'Gucci','Mens',600,12),(154,'Louis Vuitton','Mens',2100,3),(159,'Fendi','Mens',900,8),(177,'Givenchy','Mens',1800,7),(187,'Versace','Mens',2000,2),(169,'Dolce & Gabbana','Mens',1500,5),(123,'Phillip Plein','Mens',1400,9),(134,'Yves Saint Laurent','Mens',1100,7),(144,'Balmain','Mens',1200,7),(198,'Hermes','Mens',1900,3);


