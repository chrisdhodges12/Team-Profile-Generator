const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if error, reject promise and send the error to the promise's `.catch()` method
            if (err) {
                reject (err);
                return;
            }
            //if good, resolve promise and send data to `.then()` method
            resolve({
                ok:true,
                message: 'File Created in ./dist/index.html!'
            });
        });
    });
}

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject (err);
            }
            resolve ({
                ok: true,
                message: 'Stylesheet created in ./dist/style.css!'
            });
        });

    })
}

module.exports = { writeFile, copyFile };