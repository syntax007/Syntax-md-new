import { join } from 'path' 
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
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

let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
    
if (user.health >= 100) return conn.reply(m.chat, `𝙔𝙊𝙐𝙍 𝙃𝙀𝘼𝙇𝙏𝙃 𝙄𝙎 𝙁𝙐𝙇𝙇 ❤\n\n*HEALTH: ${user.health}*`, fkontak, m)

    
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
    
if (user.potion < count) return conn.reply(m.chat, `
𝙔𝙊𝙐 𝙉𝙀𝙀𝘿 ${count - user.potion} 𝙋𝙊𝙏𝙄𝙊𝙉 🥤 𝙏𝙊 𝙃𝙀𝘼𝙇 𝙔𝙊𝙐

𝙃𝙀𝘼𝙇𝙏𝙃 » ${user.health} ❤️
𝙋𝙊𝙏𝙄𝙊𝙉 » ${user.potion} 🥤


𝘽𝙐𝙔 𝙋𝙊𝙏𝙄𝙊𝙉 𝙊𝙍 𝘼𝙎𝙆 𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙏𝙊 𝙏𝙍𝘼𝙉𝙎𝙁𝙀𝙍 𝙔𝙊𝙐

*LOW POTION*
𝘽𝙪𝙮 𝙋𝙤𝙩𝙞𝙤𝙣 🥤
${usedPrefix}buy potion ${count - user.potion}`, fkontak, m)

  
    user.potion -= count * 1 //1 potion = count (1) 
    user.health += heal * count
    
   conn.reply(m.chat, `𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔 𝙐𝙎𝙀 ${count} 𝙋𝙊𝙏𝙄𝙊𝙉 🥤 𝙏𝙊 𝙍𝙀𝘾𝙊𝙑𝙀𝙍 𝙃𝙀𝘼𝙇𝙏𝙃\n\n𝙃𝙀𝘼𝙇𝙏𝙃 » ${user.health} ❤\n\n*HEALTH COMPLETED*`, fkontak, m)    

}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
handler.register = true
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}