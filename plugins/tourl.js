

import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀 𝙊𝙍 𝙑𝙄𝘿𝙀𝙊─── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = ` *🛑 𝙻𝚒𝚗𝚔:*\n${link}
  *🥏 𝚂𝙸𝚉𝙴:*\n${media.length} bytes\n
  *🚀 𝙴𝚇𝙿𝙸𝚁𝙰𝚃𝙸𝙾𝙽:*\n ${isTele ? '✅ NO EXPIRA' : '⚠️ DESCONOCIDO'}\n
  *🔰 𝚂𝙷𝙾𝚁𝚃𝙴𝙽𝙴𝙳:*\n${await shortUrl(link)}`

conn.reply(m.chat, caption, m, { contextInfo: {
          externalAdReply :{
    mediaUrl: md,
    mediaType: 2,
    title: wm,
    body: botdate,
    thumbnail: await(await fetch(link)).buffer(),
    sourceUrl: link
     }}
  })
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}