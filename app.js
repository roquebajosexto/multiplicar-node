const argv = require('./config/yargs').argv

const { crearArchivo } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors/safe');
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //console.log(argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e))
            // crearArchivo(argv.base, argv.limite)
            //     .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            //     .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}