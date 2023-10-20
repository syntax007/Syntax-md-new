import fetch from 'node-fetch'
let handler = async (m, {conn, command, usedPrefix, text }) => { 
if (!text) throw `𝙒𝙍𝙄𝙏𝙀 𝙔𝙊𝙐𝙍 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 𝙏𝙊 𝘽𝙀 𝘼𝙉𝙎𝙒𝙀𝙍𝙀𝘿\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} How r u?*`   
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=en`)
let json = await res.json()
if (json.success)
  
m.reply(`╭━〔 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 〕━⬣ 
🙀 ${text}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝙀
😼 : ${json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')}`) 


}
  
handler.help = ['how <text>?']
handler.tags = ['fun']
handler.command = /^bro|how|bot$/i  
export default handler
