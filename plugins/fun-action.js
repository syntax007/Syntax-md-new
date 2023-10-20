let handler = async (m, { conn, groupMetadata, text, command}) => {
  if (!m.mentionedJid[0] && !m.quoted) throw 'TAG SOMEONE IN THE GROUP TO DO SOME ACTIONS'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let participants = groupMetadata.participants
  conn.reply(m.chat, `you just gave him ${command} ${text} a *@${user.split('@')[0]}* 😳`, null, { mentions: [user] })

}
handler.help = ['action']
handler.tags = ['fun']
handler.command = /^(give away|give|send|poke|suck|poke)$/

handler.group = true

export default handler
