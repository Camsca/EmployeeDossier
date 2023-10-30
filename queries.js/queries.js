const db = require ('./db');

async function getDeparment(){
    try{
        const result = await db.query('SELECT * FROM department');
    return rows;
} catch (error) {
   throw error;
}
};

async function getRole(){
    try{
        const result = await db.query('SELECT * FROM role');
    return rows;
} catch (error) {
   throw error;
}
};

async function getEmployee(){
    try{
        const result = await db.query('SELECT * FROM employee');
    return rows;
} catch (error) {
   throw error;
};
};





module.exports = {
    getDeparment,
    getRole,
    getEmployee
}