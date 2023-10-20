let handler = async (m, { conn, usedPrefix }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

if (global.db.data.users[m.sender].pasangan == "") return await conn.reply(m.chat, `*${usuario}*𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝙄𝙉 𝘼 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋\n\n*_If you want to have a partner use the command ${usedPrefix}prapose tagging someone._*\n\n`, fkontak,  m)

  
if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return await conn.reply(m.chat, `*${usuario}* 💗 *you are in a relationship with*${await conn.getName(persona)}* 💖`, fkontak, m, {contextInfo: { mentionedJid: [ m.sender, who ] }})

await conn.reply(m.chat, `🤨it seems that*${await conn.getName(persona)}* He has  accepted not rejected your proposal to be in a relationship with both of you. \n\n*_Given the situation, this pending will be cancelled_*\n\n`, fkontak, m, {contextInfo: { mentionedJid: [ persona, m.sender ] }})

global.db.data.users[m.sender].pasangan = ""
}
handler.help = ['mylove']

handler.tags = ['relationship'] 
handler.command = /^(sinceridad|mipareja|miamor|minovio|minovia|mylove)$/i
handler.group = true
export default handler