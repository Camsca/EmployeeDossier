const require = ('./db')

async function getEmployee(){
    try{
        const result = await db.query('SELECT * FROM employee');
    return rows;
} catch (error) {
   throw error;
}
};

async function getEmployeeByManager(){
    const sql = `SELECT * FROM employee WHERE manager_id = ?`;
const values = [managerId];
try{
    const [result] = await db.query(sql, values);
    return rows;
}catch(error) {
    throw error;
}
};
 
async function getEmployeeByDepartment(){
    const sql = `SELECT * FROM employee WHERE department_id = ?`;
    const values = [departmentId];
    try{
        const [result] = await db.query(sql, values);
        return rows;
    }catch(error) {
        throw error;
    } 

};

async function addEmployee(){
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const values = [firstName, lastName, roleId, managerId];
    try{
        const result = await db.query(sql, values);
       console.log(`Added ${firstName} ${lastName} ${roleId} ${managerId} to the database`);
    }catch(error) {
        throw error;
    } 
};
  async function updateEmployeeRole(){
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const values = [roleId, employeeId];
    try{
        const result = await db.query(sql, values);
        console.log(`Updated ${employeeId} role to ${roleId}`);
    }catch(error) {
        throw error;
    }
};
async function updateEmployeeManager(){
        const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;
        const values = [managerId, employeeId];
        try{
            const result = await db.query(sql, values);
            console.log(`Updated ${employeeId} manager to ${managerId}`);
        }catch(error) {
            throw error;
        }
    };
 async function deleteEmployee(){
        const sql = `DELETE FROM employee WHERE id = ?`;
        const values = [employeeId];
        try{
            const result = await db.query(sql, values);
            console.log(`Deleted ${employeeId} from the database`);
        }catch(error) {
            throw error;
        }
    };
module.exports = { getEmployee,
    getEmployeeByManager,
    getEmployeeByDepartment,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    deleteEmployee,};