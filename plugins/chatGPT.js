import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
if (!text) throw `*𝙀𝙣𝙩𝙚𝙧 𝙩𝙚𝙭𝙩 𝙬𝙝𝙖𝙩 𝙮𝙤𝙪 𝙬𝙖𝙣𝙩 𝙩𝙤 𝙨𝙚𝙖𝙧𝙘𝙝* 🔎\n\n❏ 𝙴𝚡𝚊𝚖𝚙𝚕𝚎\n❏ ${usedPrefix + command} Recommend a top 10 action movie\n❏ ${usedPrefix + command} JS code for a card game`     
try {
conn.sendPresenceUpdate('composing', m.chat)  
let chgptdb = global.chatgpt.data.users[m.sender];
chgptdb.push({ role: 'user', content: text });
const config = { method: 'post', url: 'https://api.openai.com/v1/chat/completions', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + global.openai_key }, data: JSON.stringify({ 'model': 'gpt-3.5-turbo', 'messages': [{ role: 'system', content: 'You will act as a WhatsApp Bot which was created by Syntax king' }, ...chgptdb ]})}
let response = await axios(config);
chgptdb.push({ role: 'assistant', content: response.data.choices[0].message.content }) 
if (response.data.choices[0].message.content == 'error' || response.data.choices[0].message.content == '' || !response.data.choices[0].message.content) return XD //causar error undefined para usar otra api    
m.reply(`${response.data.choices[0].message.content}`.trim())
} catch {
try {
const botIA222 = await openaiii.createCompletion({ model: "text-davinci-003", prompt: text, temperature: 0.3, max_tokens: 4097, stop: ["Ai:", "Human:"], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0, })
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD //causar error undefined para usar otra api
m.reply(botIA222.data.choices[0].text.trim())    
} catch {
try { 
let akuariapi1 = await fetch(`https://api.akuari.my.id/ai/gbard?chat=${text}`)
let akuariapijson1 = await akuariapi1.json()
if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD //causar error undefined para usar otra api 
let akuariapiresult1 = await translate(`${akuariapijson1.respon}`, { to: 'en', autoCorrect: true })
m.reply(`${akuariapiresult1.text}`.trim())         
} catch {
try {
let tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`)
let hasill22 = await tioress22.json()
if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD //causar error undefined para usar otra api 
let hasill22_result = await translate(`${hasill22.result}`, { to: 'en', autoCorrect: true })  
m.reply(`${hasill22_result.text}`.trim())         
} catch {
try {  
const searchString2 = " india "
const replacementString2 = ' india '
let rres = await fetch(`https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv`)
let jjson = await rres.json()
let hahaha = await translate(`${jjson.data}`, { to: 'en', autoCorrect: true })
let sextS = hahaha.text
let replacedText = sextS.replace(searchString2, replacementString2).trim()
m.reply(replacedText)
} catch {    
try {   
let akuariapi2 = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`)
let akuariapijson2 = await akuariapi2.json()
if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD //causar error undefined para lanzar msg de error
let akuariapiresult2 = await translate(`${akuariapijson2.respon}`, { to: 'en', autoCorrect: true })
m.reply(akuariapiresult2.text.trim())    
} catch {    
try {   
let syms1 = `You will act as a WhatsApp Bot which was created by syntax king`  
let fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${syms1}&apikey=fg-dylux`)
let fgjson1 = await fgapi1.json()
if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD //causar error undefined para lanzar msg de error
let fgjson1_result = await translate(`${fgjson1.result}`, { to: 'en', autoCorrect: true })  
m.reply(fgjson1_result.text.trim())    
} catch {    
}}}}}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
