const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN = './main.mustache'

let DATA = {
    name: "Justin",
    date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'MST'
    })
}

function generateReadMe () {
    fs.readFile(MUSTACHE_MAIN, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    })
}

generateReadMe();