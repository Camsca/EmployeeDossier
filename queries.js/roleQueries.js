const db = require('../db');

async function getRole(){
    try{
        const result = await db.query('SELECT * FROM role');
    return rows;
} catch (error) {
   throw error;
}
};


module.exports = { getRole,
    addRole,
    deleteRole,};