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

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30),
  PRIMARY KEY (id)
);


CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Seed for employee table
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (NULL, 'Leslie', 'Knope', 23, 1);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (NULL, 'Ron', 'Swanson', 33, 2);

INSERT INTO department (id, department_name)
VALUES (NULL, 'Accounting');


INSERT INTO department (id, department_name)
VALUES (NULL, 'Governing');

