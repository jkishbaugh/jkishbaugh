import Mustache from "mustache";
import fs from "fs";
const MUSTACHE_MAIN = "./main.mustache";
const skills = {
    languages: [{
      label: "Java",
      logo: "openjdk",
      color: "365a3f",
      style:"plastic"
    },
    {
      label: "Kotlin",
      logo: "kotlin",
      color: "365a3f",
      style: "plastic"
    },
    {
      label: "Groovy",
      logo: "apachegroovy",
      color: "365a3f",
      style: "plastic"
    },
    {
      label: "Javascript",
      logo: "JavaScript",
      color: "365a3f",
      style: "plastic"
    },
    {
      label: "C#",
      logo: "csharp",
      color: "365a3f",
      style: "plastic"
    },
  ],
    frameworks: [{
      label: "Spring",
      logo: "Spring",
      color: "5A5136",
      style: "plastic"
    },
    {
      label: "React",
      logo: "React",
      color: "5A5136",
      style: "plastic"
    },
    {
      label: "Angular",
      logo: "Angular",
      color: "5A5136",
      style: "plastic"
    },
  ],
    tools: [{
      label: "ArgoCd",
      logo: "argo",
      color: "F4A731",
      style: "plastic"
    },
    {
      label: "OpenShift",
      logo: "redhatopenshift",
      color: "F4A731",
      style: "plastic"
    },
    {
      label: "NewRelic",
      logo: "newrelic",
      color: "F4A731",
      style: "plastic"
    },
    {
      label: "Jenkins",
      logo: "jenkins",
      color: "F4A731",
      style: "plastic"
    },
    {
      label: "AWS",
      logo: "amazonwebservices",
      color: "F4A731",
      style: "plastic"
    }
  ],
    databases: [{
      label: "SQL",
      logo: "Microsoft-SQL-Server",
      color: "363f5a",
      style: "plastic"
    },
    {
      label: "MySql",
      logo: "MySQL",
      color: "363f5a",
      style: "plastic"
    },{
      label: "Redis",
      logo: "redis",
      color: "363f5a",
      style: "plastic"
    },{
      label: "Mongodb",
      logo: "mongodb",
      color: "363f5a",
      style: "plastic"
    }],
    explorations: [
      {
      label: "Rust",
      logo: "Rust",
      color: "5a3651",
      style: "plastic"
    },
    {
      label: "Go",
      logo: "Go",
      color: "5a3651",
      style: "plastic"
    },
  ]
}

export function prepData() {
  let DATA = {
    name: "Justin"
  };
  DATA.bitmoji = setBitMojiImageFile(new Date());

  let languages = [];
  for (let l of skills.languages) {
    languages.push({ url: buildShieldURL(l) });
  }
  DATA.languages = languages;
  let frameworks = [];
  for (let f of skills.frameworks) {
    frameworks.push({ url: buildShieldURL(f) });
  }
  DATA.frameworks = frameworks;
  let tools = [];
  for (let t of skills.tools) {
    tools.push({ url: buildShieldURL(t) });
  }
  DATA.tools = tools;
  let databases = [];
  for (let d of skills.databases) {
    databases.push({ url: buildShieldURL(d) });
  }
  DATA.databases = databases;
  let explorations = [];
  for (let e of skills.explorations) {
    explorations.push({ url: buildShieldURL(e) });
  }
  DATA.explorations = explorations;

  // set interests
  // set hobbies

  return DATA;
}

export function buildShieldURL({ label, color, style = "flat", logo }) {
  const encodedLabel = encodeURIComponent(label);
  let url = `https://img.shields.io/badge/${encodedLabel}-informational?style=${style}&logo=${logo}&logoColor=white&color=${color}`;
  console.log("URL: " + url);
  return url;
}

export function generateReadMe() {
  let DATA = prepData();
  fs.readFile(MUSTACHE_MAIN, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync("README.md", output);
  });
}

export function setBitMojiImageFile(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  console.log("Month: " + month + ", Day: " + day);

  if (month === 2 && day == 14) {
    return "/images/heart-headband.png";
  }
  if(month === 3 && day == 17){
    return "/images/lucky.png";
  }
  if(month === 7 && day == 4){
    return "/images/july4.png";
  }
  if(month === 10 && day == 3){
    return "/images/eating cake friend.png";
  }
  if(month === 11 && day >= 20 && day <= 30){
    return "/images/grateful.png";
  }
  if(month === 12 && day >= 20 && day <= 31){
    return "/images/merry christmas pop up card.png";
  }
  if(month === 1 || month === 2 || month === 12){
    return "/images/snow globe wave.png";
  }
  if(month >= 3 && month <= 5){
    return "/images/hiking.png";
  }
  if(month >= 6 && month <= 8){
    return "/images/summer.png";
  }
  if(month >= 9 && month <= 11){
    return "/images/a pile of autumn leaves.png";
  }
  return "/images/hmmm.png";
}

generateReadMe();