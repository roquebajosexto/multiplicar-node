//Requires
const fs = require('fs')
var colors = require('colors');
let listarTabla = (base, limite) => {
    if (Number(base)) {
        if (Number(limite)) {
            console.log('=================='.green);
            console.log(`tabla de ${ base }`.green);
            console.log('=================='.green);
            for (let i = 1; i <= limite; i++) {
                console.log(`${base} * ${i} = ${ base * i}\n`)
            }
        } else {
            console.log(`El valor ${limite} del limite no es un numero`);
        }
    } else {
        console.log(`El valor ${base} de la base no es un numero`);
    }

}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`)
            return;
        } else {
            if (Number(limite)) {
                let data = ''
                for (let i = 1; i <= limite; i++) {
                    data += `${base} * ${i} = ${ base * i}\n`
                }

                fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                    if (err)
                        reject(err)
                    else
                        resolve(`tabla-${base}-al-${limite}.txt`)
                });
            } else {
                reject(`El valor ${limite} del limite no es un numero`);
            }
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}