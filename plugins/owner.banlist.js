let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `
*╭•·–| 👥 ≡ *USERS BANNED* |–·•*
│ *Total : ${users.length} Users* ${users ? '\n' + users.map(([jid], i) => `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'No Banned Users' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - -│ - - - - - - -`.trim()).join('\n') : ''}│ 
*╰•·–––––––––––––––––––·•*`.trim()

await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}

handler.command = /^listbanuser|banlist$/i

export default handler