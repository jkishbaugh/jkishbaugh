const Mustache = require("mustache");
const fs = require("fs");
const MUSTACHE_MAIN = "./main.mustache";

let DATA = {
  name: "Justin",
  date: new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    timeZone: "MST",
  }),
  skills: [
    {
      wordOnLeft: "Framework",
      wordOnRight: "Spring",
      icon: "Spring",
      color: "F4A731",
    },
    {
      wordOnLeft: "Language",
      wordOnRight: "Java",
      icon: "Java",
      color: "E17F33",
    },
    {
      wordOnLeft: "Framework",
      wordOnRight: "React",
      icon: "React",
      color: "653A27",
    },
    {
      wordOnLeft: "Framework",
      wordOnRight: "Angular",
      icon: "Angular",
      color: "653A27",
    },
    {
      wordOnLeft: "Language",
      wordOnRight: "Javascript",
      icon: "JavaScript",
      color: "7CBEA4",
    },
    {
      wordOnLeft: "Language",
      wordOnRight: "Kotlin",
      icon: "kotlin",
      color: "7CBEA4",
    },
    {
      wordOnLeft: "Exploration",
      wordOnRight: "Rust",
      icon: "Rust",
      color: "F4A731",
    },
    {
      wordOnLeft: "Exploration",
      wordOnRight: "Go",
      icon: "Go",
      color: "E17F33",
    },
    {
      wordOnLeft: "Framework",
      wordOnRight: ".NET",
      icon: ".NET",
      color: "653A27",
    },
    {
      wordOnLeft: "Language",
      wordOnRight: "CSharp",
      icon: "C-Sharp",
      color: "7CBEA4",
    },
    {
      wordOnLeft: "Tool",
      wordOnRight: "SQL",
      icon: "Microsoft-SQL-Server",
      color: "F4A731",
    },
    {
      wordOnLeft: "Tool",
      wordOnRight: "ArgoCd",
      icon: "argo",
      color: "F4A731",
    },
    {
      wordOnLeft: "Tool",
      wordOnRight: "OpenShift",
      icon: "redhatopenshift",
      color: "F4A731",
    },
    {
      wordOnLeft: "Tool",
      wordOnRight: "New-Relic",
      icon: "newrelic",
      color: "F4A731",
    },
    {
      wordOnLeft: "Tool",
      wordOnRight: "MySql",
      icon: "MySQL",
      color: "E17F33",
    },
    {
      wordOnLeft: "Tool",
      wordOnRight: "Intellij",
      icon: "Intellij-IDEA",
      color: "653A27",
    },
    {
      wordOnLeft: "Tool",
      wordOnRight: "WSL",
      icon: "Windows-Terminal",
      color: "7CBEA4",
    },
    {
      wordOnLeft: "Tool",
      wordOnRight: "Splunk",
      icon: "splunk",
      color: "7CBEA4",
    },
    {
      wordOnLeft: "Certification",
      wordOnRight: "Azure-Developer",
      icon: "Azure-DevOps",
      color: "7CBEA4",
    },{
      wordOnLeft: "Certification",
      wordOnRight: "AWS-Cloud-Practitioner",
      icon: "amazonwebservices",
      color: "7CBEA4"
    }
  ],
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    //console.log(output)
    fs.writeFileSync("README.md", output);
  });
}

generateReadMe();
