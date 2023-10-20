let handler = async (m) => {
let syntax = { contextInfo: { externalAdReply: { mediaUrl: 'https://youtube.com/@samcreation8299', mediaType: 'VIDEO', description: 'INDIAN PIES ', title: 'INDIAN PIES ', body: `𝚂𝚢𝚗𝚝𝚊𝚡-𝚖𝚍`, thumbnailUrl: 'https://imgur.io/a/eVzyind.jpg', sourceUrl: 'https://youtube.com/@samcreation8299', }}}

let king = `https://shizoapi.onrender.com/api/pies/indian?apikey=${shizokeys}`
conn.sendFile(m.chat, king, `𝚂𝚢𝚗𝚝𝚊𝚡-𝚖𝚍`, piesmsg, m, true, syntax)
}
handler.help = ['indpies']
handler.tags = ['pies']
handler.command = /^(indpies)$/

export default handler