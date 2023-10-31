const db = require ('./db');

//depament queries to get, add, and delete
async function getDeparment(){
    try{
        const result = await db.query('SELECT * FROM department');
    return rows;
} catch (error) {
   throw error;
}
};
async function addDeparment(){
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const values = [departmentName];

    try{
        const result = await db.query(sql, values);
        console.log(`Added ${departmentName} to the database`);
    
} catch (error) {
    throw error;
}
};



async function deleteDeparment(){
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
    getDeparment,
    addDeparment,
  deleteDeparment,
};