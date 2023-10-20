let handler = async (m) => {


let king = `https://shizoapi.onrender.com/api/pies/Indonesia?apikey=${shizokeys}`
conn.sendFile(m.chat, king, `𝚂𝚢𝚗𝚝𝚊𝚡-𝚖𝚍`, piesmsg, m, true, )
}
handler.help = ['indopies']
handler.tags = ['pies']
handler.command = /^(indopies)$/

export default handler