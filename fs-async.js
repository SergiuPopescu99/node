const fs = require('fs');


fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return null
    }
    const first = result;
    fs.readFile('./content/second.txt', 'utf8', (err, result) => {

        if (err) {
            console.log(err)
            return null
        }
        const second = result;
        fs.writeFile('./content/result-sync.txt', `here is your result : ${first} , ${second}`, (err, res) => {
            if (err) {
                console.log(err)
                return null
            }
            console.log(res)
        })
    })
})

