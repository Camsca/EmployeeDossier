const db = require ('../config/connection');

async function getRole(){
    try{
        const [rows] = await db.query('SELECT * FROM role');
    return rows;
} catch (error) {
   throw error;
}
};


const addRole = async (roleTitle, roleSalary, roleDepartmentId) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);';
    const values = [roleTitle, roleSalary, roleDepartmentId];

  try {
    const result = await db.query(query, values);
    console.log('Role added successfully.');
  } catch (error) {
    console.error('Error adding role:', error);
  }
}
  
async function deleteRole(roleId) {
    const query = 'DELETE FROM role WHERE id = ?';
    const values = [roleId];
    try {
        const result = await db.query(query, values);
        console.log(`Deleted role with ID ${roleId} from the database`);
    } catch (error) {
        throw error;
    }
}

module.exports = { getRole,
    addRole,
    deleteRole,};