let handler = async (m) => {


let king = `https://shizoapi.onrender.com/api/pies/vietnam?apikey=${shizokeys}`
conn.sendFile(m.chat, king, `𝚂𝚢𝚗𝚝𝚊𝚡-𝚖𝚍`, piesmsg, m, true, )
}
handler.help = ['vietnampies']
handler.tags = ['pies']
handler.command = /^(vietnampies)$/

export default handler