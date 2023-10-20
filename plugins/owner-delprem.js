let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*𝑻𝑨𝑮 𝑻𝑯𝑬 𝑩𝑰𝑻𝑪𝑯 𝒀𝑶𝑼 𝑾𝑰𝑳𝑳 𝑹𝑬𝑴𝑶𝑽𝑬 𝑭𝑹𝑶𝑴 𝑷𝑹𝑬𝑴𝑰𝑼𝑴 𝑼𝑺𝑬𝑹* 😿\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
if (!global.prems.includes(who.split`@`[0])) throw `𝑻𝑯𝑬 𝑼𝑺𝑬𝑹 𝑰𝑺 𝑵𝑶𝑻 𝑷𝑹𝑬𝑴𝑰𝑼𝑴 *𝑩𝑨𝑲𝑨* 🥺`
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `\n\n@${who.split`@`[0]} 𝑵𝑶𝑾 𝒀𝑶𝑼 𝑨𝑹𝑬 𝑵𝑶 𝑳𝑶𝑵𝑮𝑬𝑹 𝑨 𝑷𝑹𝑬𝑴𝑰𝑼𝑴 𝑼𝑺𝑬𝑹 *_𝑩𝑨𝑲𝑨_* 

𝒀𝑶𝑼 𝑯𝑨𝑽𝑬 𝑳𝑬𝑴𝑰𝑻𝑺 😰`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^delprem|deleteprem$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true
export default handler
