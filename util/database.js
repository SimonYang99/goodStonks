// const Pool = require('pg').Pool;
// const dotenv = require('dotenv')

// dotenv.config()

// // PostGres
// const pool = new Pool ({
//     connectionString: "postgres://ijxpcunzisdzwe:65a1ca72fe1c333124da8765e544a039c39f6ffca9ba1e89932d1904938ae225@ec2-34-193-113-223.compute-1.amazonaws.com:5432/d37cgb2g46cvj7"
// });

// // const pool = new Pool ({
// //     connectionString: process.env.DATABASE_URL
// // });

// pool.connect();

// module.exports = pool;  


const { Client } = require('pg');

// PostGres
const client = new Client ({
    host: "ec2-34-193-113-223.compute-1.amazonaws.com",
    user: "ijxpcunzisdzwe",
    database: "d37cgb2g46cvj7",
    password: "65a1ca72fe1c333124da8765e544a039c39f6ffca9ba1e89932d1904938ae225",
    ssl: { rejectUnauthorized: false }
});

module.exports = client.connect();