let handler = async (m) => {


let king = `https://shizoapi.onrender.com/api/pies/korea?apikey=${shizokeys}`
conn.sendFile(m.chat, king, `𝚂𝚢𝚗𝚝𝚊𝚡-𝚖𝚍`, piesmsg, m, true, )
}
handler.help = ['koreapies']
handler.tags = ['pies']
handler.command = /^(koreapies)$/

export default handler