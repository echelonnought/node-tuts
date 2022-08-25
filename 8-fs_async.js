const { readFile, writeFile} = require('fs');

console.log("starting ...")
readFile('./content/third.txt', 'utf8', (error, result) => {

    if(error) {
        console.log(error);
        return;
    }
    const third = result;

    readFile('./content/second.txt', 'utf8', (error, result) => {
        if(error) {
            console.log(error);
        }
        const second = result;

        console.log("executing this...")
        writeFile('./content/async-doc.txt', `Combining, ${third} and ${second}`, (error, result) => {
            if(error) {
                console.log(error);
                return
            }

            console.log(result)
        });
    })

})

console.log("stops, ready to start again ...")