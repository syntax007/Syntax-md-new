let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat

//let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
//let res = [];
let user = global.db.data.users[who]
if (!who) throw `*MENTION OR RESPOND TO THE MESSAGE OF THE PERSON WHO WILL BE PREMIUM*\n\n*${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*${usedPrefix + command} 1*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
let name = await '@' + who.split`@`[0]

var hora1 = 3600000 * txt //1h
var dia1 = 86400000 * txt //1d
var semana1 = 604800000 * txt //1s
var mes1 = 2629800000 * txt //1m
var now = new Date() * 1

if (!txt && !m.quoted) throw `*𝒀𝑶𝑼 𝑫𝑼𝑴𝑩 𝑾𝑬𝑹𝑬 𝑰𝑺 𝑷𝑹𝑬𝑴𝑰𝑼𝑴 *𝑻𝑰𝑴𝑬**`
if (txt == 0 || txt == null) throw `*YOU MUST ENTER PREMIUM TIME*\n\n*${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*${usedPrefix + command} 1*`
if (isNaN(txt)) return m.reply(`*ONLY NUMBER*\n\n*${usedPrefix + command} @${m.sender.split`@`[0]} 1*`)


  
 
if (command == 'addprem' || command == 'userpremium') {
if (now < user.premiumTime) user.premiumTime += hora1
else user.premiumTime = now + hora1
user.premium = true
m.reply(`*🎟️ *𝗽𝗿𝗲𝗺𝗶𝘂𝗺 𝘂𝘀𝗲𝗿*!!!

*✨ 𝙐𝙎𝙀𝙍 » ${name}*
*🕐 𝙏𝙄𝙈𝙀 » ${hora1 } hour(s)*
*📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} sec*`)}
    
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = ['addprem', 'userpremium', 'addprem2', 'userpremium2', 'addprem3', 'userpremium3', 'addprem4', 'userpremium4'] 
handler.group = true
handler.owner = true
handler.botAdmin = true
export default handler

