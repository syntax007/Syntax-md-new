import fetch from 'node-fetch' 
//import { areJidsSameUser } from '@adiwajshing/baileys'
let { areJidsSameUser } = (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }



let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.reply(m.chat, `𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak, m)

	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.reply(m.chat, `𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, fkontak, m)

	
if(user === m.sender) return  await conn.reply(m.chat, `𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)

	
if(user === conn.user.jid) return await conn.reply(m.chat, `𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, fkontak, m)

    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.reply(m.chat, `𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘼𝘾𝘾𝙀𝙋𝙏 𝙄𝙁 𝙉𝙊𝘽𝙊𝘿𝙔 𝙃𝘼𝙎 𝘿𝙀𝘾𝙇𝘼𝙍𝙀𝘿, 𝘿𝙀𝘾𝙇𝘼𝙍𝙀 𝙒𝙄𝙏𝙃 *${tu}* 𝙏𝙊 𝙎𝘼𝙔 𝙄𝙁 𝙔𝙊𝙐 𝘼𝘾𝘾𝙀𝙋𝙏 𝙊𝙍 𝙍𝙀𝙅𝙀𝘾𝙏 𝙔𝙊𝙐`, fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	
	
	
}else{
global.db.data.users[m.sender].pasangan = user
return await conn.reply(m.chat, `💝 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇𝙇𝙔 𝙏𝙃𝙀𝙔 𝘼𝙍𝙀 𝙄𝙉 𝘼 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋\n\n*${tu} 💞 ${yo}*\n`, m, wa.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	

}}}
handler.help = ['accept']

handler.tags = ['relationship'] 
handler.command = /^(aceptar|acepto|accept)$/i
handler.group = true
export default handler