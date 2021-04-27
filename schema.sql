DROP DATABASE IF EXISTS tracker_DB;
CREATE DATABASE tracker_DB;

USE tracker_DB;


CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,

--   fill out to match readme
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);

-- CREATE TABLE role, department

-- Seed for employee table
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("chocolate", 3.10, 120);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);