let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ 𝙏𝘼𝙂 𝙎𝙊𝙈𝙀𝙊𝙉𝙀 @𝙏𝘼𝙂 𝙊𝙍 𝙏𝙔𝙋𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯` 

if (command == 'gay2') {
let juego = `_*${text.toUpperCase()}* *IS* *${(100).getRandom()}%* *GAY*_ 🏳️‍🌈`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'lesbian') { 
let juego = `_*${text.toUpperCase()}* *IS* *${(100).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ 🏳️‍🌈`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'hot') {
let juego = `_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ 🥵💦`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'saxy') {
let juego = `_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ 😏💦`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'chutiya') {
let juego = `_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *chutiya no1 XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'out') {
let juego = `_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MORE INFORMATION TO YOUR PRIVATE 🔥🥵 XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'gandu') {
let juego = `_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------  
  
if (command == 'randi') {
let juego = `_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------ 
  
if (command == 'rat') {
let juego = `_*${text.toUpperCase()}* *EN* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🐁 EAT CHEESE 🧀*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------   
 
  
// ------------------------------------------------------------------------------------------------------------------------------------------------   
  
if (command == 'handsome') {
let juego = `_*${text.toUpperCase()}* *EN* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅,most handsome XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
 // ------------------------------------------------------------------------------------------------------------------------------------------------   
if (command == 'love') {
let juego = `*❤️❤️ LOVE METER ❤️❤️*\n*_${text.toUpperCase()}'s love IS ${(500).getRandom()}% Should you ask her to be your girlfriend?_*`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

}
handler.help = ['love', 'gay 2', 'lesbian', 'hot', 'saxy', 'chutiya', 'gandu', 'randi', 'rat', 'handsome'].map(v => v + ' @tag | number')
handler.tags = ['gc-fun']
handler.command = /^love|gay2|lesbian|hot|saxy|chutiya|out|gandu|randi|rat|handsome/i
handler.exp = null
export default handler
