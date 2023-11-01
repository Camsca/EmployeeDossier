const db = require ('../config/connection');

//depament queries to get, add, and delete
async function getDepartment() { // Use "getDepartment" here
    try {
        const [row] = await db.query('SELECT * FROM department');
        return row;
    } catch (error) {
        throw error;
    }
}

async function addDepartment(departmentName){
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const values = [departmentName];

    try{
        const result = await db.query(sql, values);
        console.log(`Added ${departmentName} to the database`);
    
} catch (error) {
    throw error;
}
};



async function deleteDepartment(departmentId){
    const sql = `DELETE FROM department WHERE id = ?`;
    const values = [departmentId];

    try{
        const result = await db.query(sql, values);
        console.log(`Deleted ${departmentId} from the database`);
    
} catch (error) {
    throw error;
}

};

module.exports = {
    getDepartment,
    addDepartment,
  deleteDepartment,
};