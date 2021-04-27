DROP DATABASE IF EXISTS tracker_DB;
CREATE DATABASE tracker_DB;

USE tracker_DB;


CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INTEGER
 );

-- Next steap, CREATE two separate TABLE for role and department

-- Seed for employee table
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (NULL, 'Leslie', 'Knope', 23, 1);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (NULL, 'Ron', 'Swanson', 33, 2);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);