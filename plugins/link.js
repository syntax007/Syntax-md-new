import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let group = m.chat

const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/group.jpg' 
let fsizedoc = '1'.repeat(10)


try{
await conn.sendFile(m.chat, pp, 'error.jpg', '*https://chat.whatsapp.com/' + await conn.groupInviteCode(group) + '*' ,m)

} catch (e) {
}} 
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
