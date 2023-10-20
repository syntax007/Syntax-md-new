let handler = async (m, { conn, isOwner }) => {
let vip = global.db.data.users[m.sender].premium
let prem = Object.entries(global.db.data.users).filter(user => user[1].premium)
let caption = `🎟️ *𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙪𝙨𝙚𝙧*
*╭•·–––––––––––––––––––·•*
│ *Total : ${prem.length} User* ${prem ? '\n' + prem.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'no users' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${vip ? '✅' : '❌'}\n`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })

}
handler.command = /^(listprem)$/i

export default handler