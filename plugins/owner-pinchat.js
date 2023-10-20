let handler = async (m, { conn, command }) => {
	try {
		await conn.chatModify({ pin: command.includes('un') ? false : true }, m.chat)
		m.reply(`Chat successfully on*${command.includes('un') ? 'unpin' : 'pin'}*.`)
	} catch (e) {
		console.log(e)
		m.reply('𝑭𝑨𝑰𝑳𝑬𝑫 *𝑩𝑨𝑲𝑨* 𝑻𝑹𝒀 𝑨𝑮𝑨𝑰𝑵 𝑳𝑨𝑻𝑬𝑹....')
	}
}

handler.help = ['pinchat','unpinchat']
handler.tags = ['owner']
handler.command = /^((un)?pin(chats?))$/i

handler.rowner = true

export default handler