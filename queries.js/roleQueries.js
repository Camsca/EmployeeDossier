const db = require('../db');

async function getRole(){
    try{
        const result = await db.query('SELECT * FROM role');
    return rows;
} catch (error) {
   throw error;
}
};

async function addRole(){
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
const values = [roleTitle, roleSalary, roleDepartmentId];

try{
    const [result] = await db.query(sql, values);
    console.log(`Added ${roleTitle} to the database`);
}catch (error) {
    throw error;
}
};

async function deleteRole(){
    const sql = `DELETE FROM role WHERE id = ?`;
const values = [roleId];
try{
    const result = await db.query(sql, values);
    console.log(`Deleted ${roleId} from the database`);
}catch (error) {
    throw error;
}
};

module.exports = { getRole,
    addRole,
    deleteRole,};