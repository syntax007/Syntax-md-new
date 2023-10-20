var handler = async (m, { conn }) => {
    if (!/viewOnce/.test(m.quoted?.mtype)) throw 'That s Not a ViewOnce Message'
	let mtype = Object.keys(m.quoted.message)[0]
	let buffer = await m.quoted.download()
	let caption = m.quoted.message[mtype].caption || ''
	conn.sendMessage(m.chat, { [mtype.replace(/Message/, '')]: buffer, caption }, { quoted: m })
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^read|readviewonce|rvo/i

export default handler