//Requirements:
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { type } = require('node:os');
//npm start for package

//Connections:
const connection = mysql.createConnection({
    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: 'root',
  
    // Your password
    password: '1tdwh2SQL!@',
    database: 'tracker_DB',
  });


  //start function 
  const start = () => {
    inquirer
      .prompt({
        name: 'viewOrAdd',
        type: 'list',
        message: 'Would you like to [ADD] an employee or [VIEW] employees?',
        choices: ['ADD', 'VIEW', 'EXIT'],
      })
      .then((answer) => {
        // based on their answer, either call the add or the view functions
        if (answer.viewOrAdd === 'ADD') {
          addEmp();
        } else if (answer.postOrBid === 'VIEW') {
          viewEmp();
        } else {
          connection.end();
        }
      });
  };

  //restart function includes nested add employee, view employee, or connection.end();
  const reStart = () => {
    inquirer
      .prompt({
        name: 'restart',
        type: 'list',
        message: 'Would you like to [ADD] another employee, [VIEW] employees, or [EXIT]?',
        choices: ['ADD', 'VIEW', 'EXIT'],
      })
      .then((answer) => {
        // based on their answer, either call the add or the view functions
        if (answer.restart === 'ADD') {
          addEmp();
        } else if (answer.postOrBid === 'VIEW') {
          viewEmp();
        } else {
          connection.end();
        }
      });
  };

  //function for add employees
  const addEmp = () => {
inquirer
    .prompt ([
{
    name: 'empFirst',
    type: 'input',
    message: 'What is the employees first name?'
},
{
    name: 'empLast',
    type: 'input',
    message: 'What is the employees last name last'
},
{
    name: 'roleID',
    type: 'input',
    message: 'What is the employees role?'
},{
    name: 'managerID',
    type: 'input',
    message: 'Who is the employees manager?'
}
    ])
.then((answers) => {
    connection.query(
        'INSERT INTO employees SET ?',
        {
            id: NULL,
            first_name: answers.empFirst,
            last_name: answers.empLast,
            role_id: answers.roleID,
            maanger_id: answers.maangerID
        },
        (err) => {
            if (err) throw err;
            console.log('Employee was added successfully!');
        reStart();
        }
    )
}
)
  }
  //function for viewing employees


  //Initialize start function
  connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  