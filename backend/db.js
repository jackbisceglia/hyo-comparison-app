const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'myPassword',
    database: 'compareit',
    host: 'localhost',
    port: '5432'
});

module.exports = pool;