const db = require ('../config/connection');
async function getEmployee(){
    try{
        const [rows] = await db.query('SELECT id, first_name,last_name, role_id, manager_id FROM employee ');
    return rows;
} catch (error) {
   throw error;
}
};

async function getEmployeeByManager(manager_id){
    const sql = `SELECT * FROM employee WHERE manager_id = ?`;
const values = [manager_id];
try{
    const [result] = await db.query(sql, values);
    return result;
}catch(error) {
    throw error;
}
};
 
async function getEmployeeByDepartment(){
    const sql = `SELECT * FROM employee WHERE department_id = ?`;
    const values = [departmentId];
    try{
        const [result] = await db.query(sql, values);
        return result;
    }catch(error) {
        throw error;
    } 

};
async function addEmployee( firstName, lastName, roleId, managerId){
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const values = [firstName, lastName, roleId, managerId];
    try{
        const result = await db.query(sql, values);
       console.log(`Added ${firstName} ${lastName}  to the database`);
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
async function updateEmployeeManager(managerId, employeeId){
        const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;
        const values = [managerId, employeeId];
        try{
            const result = await db.query(sql, values);

        }catch(error) {
            throw error;
        }
    };
 async function deleteEmployee(employeeId){
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
    deleteEmployee,}