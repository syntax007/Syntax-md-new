
let handler = async (m, {conn, usedPrefix}) => {
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
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    conn.reply(m.chat,`
╭━━━〔 🔖 *BALANCE* 〕━━━⬣
┃ *📌Number* : _@${who.split('@')[0]}_
┃ *💎Diamonds* : _${user.diamond}_
┃ *💎Gold* : _${user.gold}_
┃ *💎Rock* : _${user.rock}_
┃ *💎EMARALD* : _${user.emerald}_
┃ *💎Rank* : _${user.role}_
┃ *💎Health* : _${user.health}_
┃ *💎Wood* : _${user.wood}_
┃ *💎Potions* : _${user.potion}_
┃ *💎Iron* : _${user.iron}_
┃ *💎Money* : _${user.money}_
┃ *⬆️XP* : _Total ${user.exp}_
╰━━━━〔 *Syntax-md* 〕━━━⬣

*NOTE :* 
You can buy 💎 diamonds using the commands*
❏ *${usedPrefix}todiamond* <amount>
❏ *${usedPrefix}todiamondall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
