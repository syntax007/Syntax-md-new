
let handler = async(m, { conn, usedPrefix, command }) => {
	
	let img = await conn.getFile(global.API('fgmods', '/api/asupan-la', { }, 'apikey'))
    let asupan = img.data
     await conn.sendFile(m.chat, img, 'img.jpg', `✅ Tharki kun🤭`, m)
  
    //conn.sendButton(m.chat, `✅ Result`, igfg, asupan, [['▷▷ NEXT', `${usedPrefix + command}`]], m)
    
    
}
handler.help = ['tvid']
handler.tags = ['img']
handler.command = ['asupan', 'tvid']
handler.premium = false
handler.diamond = false 

export default handler
