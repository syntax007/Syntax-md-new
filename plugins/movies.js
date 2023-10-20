/* Creado/adaptado por Bruno Sobrino (https://github.com/BrunoSobrino) */

import fetch from 'node-fetch'
import axios from 'axios'
import { load } from 'cheerio'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw '𝑬𝑵𝑻𝑬𝑹 𝑻𝑯𝑬 𝑵𝑨𝑴𝑬 𝑶𝑭 𝑺𝑶𝑴𝑬 𝑴𝑶𝑽𝑰𝑬 𝑻𝑶 𝑺𝑬𝑨𝑹𝑪𝑯'   
let aaaa = await searchC(text)
if (command == 'pelisplus') aaaa = await searchP(text)
if (aaaa == '') throw '𝗧𝗿𝘆 𝗗𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝘁 𝗺𝗼𝘃𝗶𝗲𝘀' 
let img = 'https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg'
if (command == 'pelisplus') img = 'https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg'
let res = await aaaa.map((v) => `*🎬 • 𝗡𝗮𝗺𝗲:* \n*🍿 • 𝙐𝙍𝙇:* ${v.link}`).join`\n\n───────────────\n\n`
let ads = '*💫 • 𝗥𝗘𝗖𝗢𝗠𝗠𝗘𝗡𝗗𝗘𝗗 𝗔𝗗𝗦:* \n*⛨ • 𝙇𝙄𝙉𝙆:* https://block-this.com/block-this-latest.apk\n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\n\n'
conn.sendMessage(m.chat, { image: { url: img }, caption: ads + res }, {quoted: m})
}
handler.command = ['movies', 'movies']
handler.level = null
handler.money = null 
export default handler

const safeLoad = async(url, options = {}) => {
try {
const { data: pageData } = await axios.get(url, options)
const $ = load(pageData) 
return $
} catch (err) {
if (err.response)
throw new Error(err.response.statusText)
throw err }}

async function searchC(query, numberPage = 1) {
const $ = await safeLoad(`https://cuevana3.info/page/${numberPage}/`, {
params: { s: query }})
const resultSearch = []
$(".results-post > article").each((_, e) => {
const element = $(e)
const title = element.find("header > h2").text()
const link = element.find(".lnk-blk").attr("href")
resultSearch.push({ title: title, link: link })})
return resultSearch }

async function searchP(query, numberPage = 1) { 
const $ = await safeLoad(`https://pelisplushd.cx/search/`, {
params: { s: query, page: numberPage }})
const resultSearch = []
$("a[class^='Posters']").each((_, e) => {
const element = $(e)
const title = element.find(".listing-content > p").text()
const link = element.attr("href")
resultSearch.push({ title: title,  link: link })})
return resultSearch }