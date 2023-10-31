const inquierer = require('inquirer');
const{ getDeparment,
    addDeparment,
    deleteDeparment,
} = require('./queries/departmentQueries');

const{ getRole,
    addRole,
    deleteDeparment,
}=require('./queries/roleQueries');

const{ getEmployee,
    getEmployeeByManager,
    getEmployeeByDepartment,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    deleteEmployee,
}=require('./queries/employeeQueries');
