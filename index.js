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
    }),
    skills: [
        {
            wordOnLeft: 'Framework',
            wordOnRight: 'Spring',
            icon: 'Spring',
            color: 'F4A731'
        },
        {
            wordOnLeft: 'Language',
            wordOnRight: 'Java',
            icon: 'Java',
            color: 'E17F33'
        },
        {
            wordOnLeft: 'Framework',
            wordOnRight: 'React',
            icon: 'React',
            color: '653A27'
        },
        {
            wordOnLeft: 'Language',
            wordOnRight: 'Javascript',
            icon: 'JavaScript',
            color: '7CBEA4'
        },
        {
            wordOnLeft: 'Exploration',
            wordOnRight: 'Reason',
            icon: 'Reason',
            color: 'F4A731'
        },
        {
            wordOnLeft: 'Exploration',
            wordOnRight: 'Go',
            icon: 'Go',
            color: 'E17F33'
        },
        {
            wordOnLeft: 'Framework',
            wordOnRight: '.NET',
            icon: '.NET',
            color: '653A27'
        },
        {
            wordOnLeft: 'Language',
            wordOnRight: 'C#',
            icon: 'CSharp',
            color: '7CBEA4'
        },
        {
            wordOnLeft: 'Tool',
            wordOnRight: 'SQL',
            icon: 'Microsoft SQL Server',
            color: 'F4A731'
        },
        {
            wordOnLeft: 'Tool',
            wordOnRight: 'MySql',
            icon: 'MySQL',
            color: 'E17F33'
        },
        {
            wordOnLeft: 'Tool',
            wordOnRight: 'Intellij',
            icon: 'Intellij IDEA',
            color: '653A27'
        },
        ]
}
retrieveTILByLanguage = () => {

}
buildData = () => {

}
function generateReadMe() {

    fs.readFile(MUSTACHE_MAIN, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    })
}

generateReadMe();