const CONFIG = require ('./app/config/configuracion');
const app = require('./app/app');
const conexión = require('./app/config/conexion');

conexión.connect()

app.listen(CONFIG.PORT, ()=>{
    console.log(`Aplicacion corriendo en puerto, ${CONFIG.PORT}`);
});

