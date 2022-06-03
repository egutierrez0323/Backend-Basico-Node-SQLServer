import {config} from 'dotenv'
config();

// console.log(process.env.NICKNAME);

export default {
    //configuraciones del servidor express
    'port': process.env.port || 3001,

    //configuraciones del servidor de Base de datos

    'db_user': process.env.DB_USER,
    'db_pass': process.env.DB_PASS,
    'db_server': process.env.DB_SERVER,
    'db_name': process.env.DB_NAME

}