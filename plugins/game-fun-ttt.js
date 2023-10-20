import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙄𝙎 𝙎𝙏𝙄𝙇𝙇 𝙋𝙇𝘼𝙔𝙄𝙉𝙂 𝙄𝙉 𝙏𝙃𝙀 𝙍𝙊𝙊𝙈\n𝙄𝙁 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙇𝙀𝘼𝙑𝙀, 𝙒𝙍𝙄𝙏𝙀 *out*\n𝙔𝙊𝙐 𝘾𝘼𝙉 𝘼𝙇𝙎𝙊 𝘿𝙀𝙇𝙀𝙏𝙀 𝙏𝙃𝙀 𝙍𝙊𝙊𝙈 𝙐𝙎𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}delttt*`
if (!text) throw `╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ 𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝘼𝘿𝘿 𝘼 𝙉𝘼𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙍𝙊𝙊𝙈╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Room Syntax*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.reply(m.chat, `𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙃𝘼𝙎 𝙅𝙊𝙄𝙉𝙀𝘿 𝙏𝙃𝙀 𝙍𝙊𝙊𝙈 *${text}*\n𝙔𝙊𝙐 𝘾𝘼𝙉 𝙋𝙇𝘼𝙔 𝙉𝙊𝙒!! 👀`, fkontak, m)

await conn.reply(m.chat, `*How to play?*\n_Answer the Game with a Number, the message must contain the position you want to be in (1,2,3,4,5,6,7,8,9)_`, fkontak, m)


room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `💖 𝙋𝙇𝘼𝙔𝙀𝙍𝙎
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
𝙏𝙐𝙍𝙉 𝙊𝙁 
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendMessage(m.chat, { image: { url: imgplay }, caption: `👻

𝙒𝘼𝙄𝙏𝙄𝙉𝙂 𝙁𝙊𝙍 𝙏𝙃𝙀 𝙎𝙀𝘾𝙊𝙉𝘿 𝙋𝙇𝘼𝙔𝙀𝙍 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙀𝙉𝙏𝙀𝙍 𝙒𝙄𝙏𝙃 𝙏𝙃𝙀 𝘽𝙐𝙏𝙏𝙊𝙉 𝘽𝙀𝙇𝙊𝙒 𝙊𝙍 𝙐𝙎𝙄𝙉𝙂 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿
*${usedPrefix + command} ${text}*

𝙄𝙁 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙇𝙀𝘼𝙑𝙀 𝙏𝙃𝙀 𝙍𝙊𝙊𝙈 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix}delttt*` }, { mentions: conn.parseMention(text), quoted: fkontak })
conn.game[room.id] = room
}}
handler.help = ['ttt']
handler.tags = ['game']

handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler