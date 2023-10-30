const db = require ('./db');

async function getDeparment(){
    try{
        const result = await db.query('SELECT * FROM department');
    return rows;
} catch (error) {
   throw error;
}
};






module.exports = {
    getDeparment,
}