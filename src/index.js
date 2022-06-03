import app from './app';

import './database/conection.js'

// const port = 3000;

app.listen(app.get('port'));


console.log(`Server run in port: ${app.get('port')}`);