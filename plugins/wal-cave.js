let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Please enter a query', m)
let tetete = `https://api.zacros.my.id/search/wallpapercave?query=${text}`
conn.sendButtonImg(m.chat, tetete, `Hasil Dari ${text}`, wm2, 'Thanks', 'thanks', m) 
}
handler.help = ['wallpapercave'].map(v => v + ' <query>')
handler.tags = ['logo','maker', 'kabul']
handler.command = /^(wallpapercave)$/i

export default handler 