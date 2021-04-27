//Requirements:
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');


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
        choices: ['ADD Employee', 'ADD Department', 'VIEW Employee', 'VIEW Departments', 'EXIT'],
      })
      .then((answer) => {
        // based on their answer, either call the add or the view functions
        switch (answer.viewOrAdd){
         case "ADD Employee":
            addEmp();
            break 
         case "VIEW Employee": 
            viewEmp();
            break
        case "ADD Department":
            addDept();
            break 
        case "VIEW Departments": 
            viewDept();
            break
        case "EXIT": 
            connecttion.end();    
            break
        }
      })};

  //restart function includes nested add employee, view employee, or connection.end();
  const reStart = () => {
    inquirer
      .prompt({
        name: 'restart',
        type: 'list',
        message: 'Would you like to [RESTART] at the beginning or [EXIT]?',
        choices: ['RESTART', 'EXIT'],
      })
      .then((answer) => {
        // based on their answer, either call the add or the view functions
        if (answer.restart === 'RESTART') {
          start();
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
            first_name: answers.empFirst,
            last_name: answers.empLast,
            role_id: answers.roleID,
            manager_id: answers.managerID
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
const viewEmp = () => {
    //query the database for all employees listed
    connection.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        //once you have the items, display:
        console.log('\n');
        console.log('-----------------------------------------ALL CURRENT EMPLOYEES----------------------------------------')
        console.table(results);
        reStart();
    })
}

//function for adding department
const addDept = () => {
    inquirer
        .prompt ([
    {
        name: 'deptName',
        type: 'input',
        message: 'What is the department name?'
    }])
    .then((answers) => {
        connection.query(
            'INSERT INTO department SET ?',
            {
                department_name: answers.deptName,
            },
            (err) => {
                if (err) throw err;
                console.log('Department was added successfully!');
            reStart();
            }
        )
    }
    )
      }

//function for viewing departments
const viewDept = () => {
    connection.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.log('\n');
        console.log('-----------------------------------------ALL CURRENT DEPARTMENTS----------------------------------------')
        console.table(results);
        reStart();
    })
}

//function for viewing all

  //Initialize start function
  connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  