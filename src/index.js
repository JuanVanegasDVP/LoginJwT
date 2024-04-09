const app = require('./app.js');
require('./connection.js');

async function init(){
    await app.listen(3000)
    console.log('conectado en el puerto 3000')
}

init();