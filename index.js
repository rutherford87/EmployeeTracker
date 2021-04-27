//Requirements:
mysql 
inquirer
console.table
//npm start for package

//Connections:
const connection = mysql.createConnection({
    host: 'localhost',
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: 'root',
  
    // Your password
    password: '',
    database: 'tracker_DB',
  });


  //start function 
  //restart function includes nested add employee, view employee, or connection.end();
  //function for add employees
  //function for viewing employees