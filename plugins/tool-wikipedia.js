import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://en.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `𝙏𝙔𝙋𝙀 𝙏𝙃𝙀 𝙆𝙀𝙔𝙒𝙊𝙍𝘿 𝙏𝙊 𝙎𝙀𝘼𝙍𝘾𝙃\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Universe*`
wikipedia(`${text}`).then(res => {
let info = `𝙄 𝙁𝙊𝙐𝙉𝘿 𝙏𝙃𝙄𝙎:\n\n` + res.result.isi
  
    conn.reply(m.chat, `${info} `, m, {
     contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
      title: '𝗦𝘆𝗻𝘁𝗮𝘅-𝗺𝗱 | 𝙒𝙞𝙠𝙞𝙥𝙚𝙙𝙞𝙖',
       body: '𝚂𝚢𝚗𝚝𝚊𝚡 𝚊𝚕𝚠𝚊𝚢𝚜 𝚜𝚊𝚡𝚢🐱❤️',         
        previewType: 0, thumbnail: imagen3,
         sourceUrl: welgata}}})
  
}).catch(() => { m.reply(`𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿 𝙒𝙃𝘼𝙏 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙇𝙊𝙊𝙆𝙄𝙉𝙂 𝙁𝙊𝙍. 𝙏𝙍𝙔 𝙏𝙊 𝙐𝙎𝙀 𝘼 𝙆𝙀𝙔 𝙒𝙊𝙍𝘿`) })}
handler.help = ['wikipedia'].map(v => v + ' <text>')
handler.tags = [ 'tools']
handler.command = /^(wiki|wikipedia)$/i 
handler.exp = null
handler.level = null
export default handler
