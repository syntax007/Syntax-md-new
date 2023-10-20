import yts from 'yt-search';
import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝘾𝙃𝘼𝙉𝙉𝙀𝙇`, m)
try {
let vids_ = { 
from: m.sender, 
urls: [] 
}
if (!global.videoList) {
global.videoList = [];
}
if (global.videoList[0]?.from == m.sender) {
delete global.videoList;
}
let results = await yts(text);
let textoInfo = `𝙔𝙊𝙐 𝘾𝘼𝙉 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙏𝙃𝙀 𝙑𝙄𝘿𝙀𝙊 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙒𝘼𝙔:
${usedPrefix}video <number> 
${usedPrefix}audio <number> 

*𝗘𝘅𝗮𝗺𝗽𝗹𝗲:*
*${usedPrefix}video 2*\n\n••••••••••••••••••••••••••••••••••••`.trim()  
let teks = results.all.map((v, i) => {
let link = v.url;
vids_.urls.push(link);
return `[${i + 1}]\n❤️꙰ *𝗧𝗶𝘁𝗲𝗹:*  ${v.title}
⁖🩵꙰*𝗨𝗿𝗹:* ${v.url}
⁖😲꙰  *𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡:* ${v.timestamp}
⁖😱꙰  *𝗨𝗣𝗟𝗢𝗔𝗗𝗘𝗗:* ${v.ago}
⁖🥳꙰  *𝗩𝗜𝗘𝗪𝗦:* ${v.views}`}).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')
conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks,m)
global.videoList.push(vids_);
} catch {    
}}
handler.help = ['download', 'search'].map(v => 'yts' + v + ' <song>')
handler.tags = ['tools']
handler.command = /^playlist|yts(search)?$/i
handler.exp = null 
handler.limit = null
handler.level = null 
export default handler



