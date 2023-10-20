import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import axios from "axios";
import moment from "moment-timezone";
 

global.owner = [
["917821096044", 'syntax king', true],
["918010431346", 'Pratap', true], 
];
global.openai_key = "sk-...OzYy2";


global.openai_org_id = "HITjoN7H8pCwoncEB9e3fSyW";

global.stickpack = 'syntax-king'
global.stickauth = `syntax-md`
global.sessionName = 'session'

global.mods = [];
global.prems = ["917821096044"];


global.mods = [918010431346]; 

global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;	

global.botdate = `${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`; 
global.bottime = `${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`;


global.packname = "𝙎𝙮𝙣𝙩𝙖𝙭-𝙢𝙙";
global.author = "𝙎𝙮𝙣𝙩𝙖𝙭 𝙠𝙞𝙣𝙜";



global.multiplier = 60; 

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
