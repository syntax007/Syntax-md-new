let handler = async (m) => {


let king = `https://shizoapi.onrender.com/api/pies/malaysia?apikey=${shizokeys}`
conn.sendFile(m.chat, king, `𝚂𝚢𝚗𝚝𝚊𝚡-𝚖𝚍`, piesmsg, m, true, )
}
handler.help = ['malaysiapies']
handler.tags = ['pies']
handler.command = /^(malaysiapies)$/

export default handler