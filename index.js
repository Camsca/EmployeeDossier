const mysql = require('mysql2/promise');
const inquirer = require('inquirer');

const {
  getDepartment,
  addDepartment,
  deleteDepartment,
} = require('./queries/deparmentQueries');

const {
  getRole,
  addRole,
  deleteRole,
} = require('./queries/roleQueries');

const {
  getEmployee,
  getEmployeeByManager,
  getEmployeeByDepartment,
  addEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
  deleteEmployee,
} = require('./queries/employeeQueries');

async function main() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'Add Department',
        'Delete Department',
        'View All Roles',
        'Add Role',
        'Delete Role',
        'View All Employees',
        'View All Employees By Manager',
        'View All Employees By Department',
        'Add Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'Delete Employee',
        'Exit',
      ],
    },
  ]);

  switch (answer.choice) {
    case 'View All Departments':
      const departments = await getDepartment();
      console.table(departments);
      break;

    case 'Add Department':
      const department = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the department?',
        },
      ]);
      await addDepartment(department.name);
      console.log('Department added successfully.');
      break;

    case 'Delete Department':
      const departmentsToDelete = await getDepartment();
      console.table(departmentsToDelete);
      const departmentToDelete = await inquirer.prompt([
        {
          type: 'input',
          name: 'id',
          message: 'What is the ID of the department you would like to delete?',
        },
      ]);
      await deleteDepartment(departmentToDelete.id);
      console.log('Department deleted successfully.');
      break;

    case 'View All Roles':
      const roles = await getRole();
      console.table(roles);
      break;

      case 'Add Role':
        const role = await inquirer.prompt([
          {
            type: 'list', 
            name: 'chooseRole',
            message: 'What role would you like to add?',
            choices: [
              'Sales Lead',
              'Salesperson',
              'Lead Engineer',
              'Software Engineer',
              'Account Manager',
              'Legal Team Lead',
              'Lawyer',
              'HR Lead',
              'HR Assistant',
            ],
          },
          {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of the role?',
          },
          {
            type: 'input',
            name: 'roleDepartmentId',
            message: 'What is the department ID of the role?',
          },
        ]);
        await addRole(role.chooseRole, role.roleSalary, role.roleDepartmentId); 
        console.log('Role added successfully.');
        break;

    case 'Delete Role':
      const rolesToDelete = await getRole();
      console.table(rolesToDelete);
      const roleToDelete = await inquirer.prompt([
        {
          type: 'input',
          name: 'id',
          message: 'What is the ID of the role you would like to delete?',
        },
      ]);
      await deleteRole(roleToDelete.id);
      console.log('Role deleted successfully.');
      break;

    case 'View All Employees':
      const employees = await getEmployee();
      console.table(employees);
      break;
    case 'View All Employees By Manager':
      const managerId = await inquirer.prompt([
        {
          type: 'input',
          name: 'managerId',
          message: 'Enter the Manager ID:',
        },
      ]);
      console.log('Manager ID provided:', managerIdInput.managerId);
  const employeesByManager = await getEmployeeByManager(managerIdInput.managerId);
  console.log('Employees by Manager:', employeesByManager);
  break;
    case 'Add Employee':
        const employee = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the first name of the employee?',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is the last name of the employee?',
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'What is the role ID of the employee?',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the manager ID of the employee?',
            },
            ]);
            await addEmployee(employee.firstName, employee.lastName, employee.roleId, employee.managerId);
            console.log('Employee added successfully.');
            break;
    case 'Update Employee Role':    
    const employeeRole = await inquirer.prompt([
        {
            type: 'input',
            name: 'role_id',
            message: 'What is the role ID of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the employee?',
        },
        ]);
        await updateEmployeeRole(employeeRole.role_id, employeeRole.id);
        console.log('Employee role updated successfully.');
        break;
    case 'Update Employee Manager':
        const employeeManager = await inquirer.prompt([
          {
            type: 'input',
            name: 'employeeId',
            message: 'What is the ID of the employee you want to update?',
        },
        {
            type: 'input',
            name: 'newManagerId',
            message: 'What is the new manager ID for the employee?',
        },
    ]);
    await updateEmployeeManager(employeeManager.newManagerId, employeeManager.employeeId);
        console.log('Employee manager updated successfully.');
            break;
    case 'Delete Employee':
        const employeesToDelete = await getEmployee();
        console.table(employeesToDelete);
        const employeeToDelete = await inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of the employee you would like to delete?',
            },
            ]);
            await deleteEmployee(employeeToDelete.id);
            console.log('Employee deleted successfully.');
            break;
            
    case 'Exit':
      console.log('Goodbye!');
      process.exit(0);
      break;

    default:
      console.log('Invalid choice');
  }
}

main();
