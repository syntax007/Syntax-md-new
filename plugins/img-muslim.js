let handler = async (m) => {


let king = `https://shizoapi.onrender.com/api/pies/hijab?apikey=${shizokeys}`
conn.sendFile(m.chat, king, `𝚂𝚢𝚗𝚝𝚊𝚡-𝚖𝚍`, piesmsg, m, true, )
}
handler.help = ['indpies']
handler.tags = ['pies']
handler.command = /^(muslimpies)$/

export default handler