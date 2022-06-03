import sql from 'mssql';
import {config} from 'dotenv'
config();

const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    //port: 1433,
    pool: {
        max: 10,
        min:0,
        idleTimeoutMillis: 30000
    },
    options: {
        // encrypt: true //for Azure :D
        trustServerCertificate: true,
        enableArithAbord: true
    }
}

export async function ConnectSQL(req,res) {
    try {
        // asegúrese de que todos los elementos estén correctamente codificados como URL en la cadena de conexión
        const pool = await sql.connect(dbSettings);
        const result = await pool.request().query("SELECT 'Succefull conection' as x");
        console.log(result);
        return pool;

    } catch (err) {
        console.log("Error trying connection");
        console.log(err);

    }
}

export { sql };