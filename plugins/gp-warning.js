let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 


let who 
let img = 'https://i.imgur.com/DvHoMc3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
	
let user = global.db.data.users[who]
if (!who) throw`✳️ 𝙏𝙖𝙜 𝙤𝙧 𝙢𝙚𝙣𝙩𝙞𝙤𝙣 𝙨𝙤𝙢𝙚𝙤𝙣𝙚\n\n📌 Example : ${usedPrefix + command} @user`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) return conn.reply(m.chat,` 𝙍𝙀𝙈𝙀𝙈𝘽𝙀𝙍 𝙏𝙊 𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙍𝙀𝘼𝙎𝙊𝙉 𝙁𝙊𝙍 𝙏𝙃𝙀 𝙒𝘼𝙍𝙉𝙄𝙉𝙂 \n\n*${usedPrefix + command}* @${name} 𝙍𝙚𝙖𝙨𝙤𝙣`,  m)  	
try {
user.warn += 1
await m.reply(
    `⚠️ *𝗪𝗮𝗿𝗻𝗲𝗱 𝗨𝘀𝗲𝗿* ⚠️

▢ *𝘼𝙙𝙢𝙞𝙣:* 
➻ ${name}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▢ *𝙐𝙨𝙚𝙧:* 
➻ @${who.split`@`[0]}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▢ *𝙒𝙖𝙧𝙣𝙨:* 
➻ ${user.warn}/4
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
▢ *𝙍𝙚𝙖𝙨𝙤𝙣:* 
➻ ${text}

    `,
    null,
    { mentions: [who] });

	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`*@${who.split`@`[0]}*,`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
}	
return !1
} catch (e) {

console.log(`❗❗`)
console.log(e)	
}}
handler.help = ['warn <@user>']
handler.tags = ['owner','group']
handler.command = /^(warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler