const require = ('./db')

async function getEmployee(){
    try{
        const result = await db.query('SELECT * FROM employee');
    return rows;
} catch (error) {
   throw error;
};
};
 


module.exports = { getEmployee,
    getEmployeeByManager,
    getEmployeeByDepartment,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    deleteEmployee,};