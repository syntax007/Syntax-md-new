let handler = async (m, { conn }) => { 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let romper = global.db.data.users[m.sender].pasangan
var ayg = global.db.data.users[m.sender]
var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

if(ayg.pasangan == ""){
return await conn.reply(m.chat, `𝘿𝙊𝙀𝙎 𝙉𝙊𝙏 𝙃𝘼𝙑𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)    

}
      
if (typeof beb == "undefined"){
await conn.reply(m.chat, `${name}* 💔 𝙏𝙃𝙄𝙎 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋 𝙃𝘼𝙎 𝙀𝙉𝘿𝙀𝘿\n\n*✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n\n${wm}`, fkontak, m, { contextInfo: { mentionedJid: [ m.sender, romper ]}}) 
                                             
ayg.pasangan = ""
}

if (m.sender == beb.pasangan){
await conn.reply(m.chat, `${name}*𝙏𝙃𝙄𝙎 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋 𝙃𝘼𝙎 𝙀𝙉𝘿𝙀𝘿\n\n*✩ Wa.me/${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\n${wm}`, fkontak, m, { contextInfo: { mentionedJid: [ m.sender, romper ]}}) 

ayg.pasangan = ""
beb.pasangan = ""
}else {
await conn.reply(m.chat, `𝙐𝙎𝙏𝙀𝘿 *${name}* 𝘿𝙊𝙀𝙎 𝙉𝙊𝙏 𝙃𝘼𝙑𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)    

}}
handler.help = ['breakup']

handler.tags = ['relationship'] 
handler.command = /^(breakup|romper|finish|terminar)$/i
handler.group = true

export default handler