import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn }) {
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'topgays') {
let vn = './media/gay2.mp3'
let top = `*🌈TOP 10 GAYS*
    
*_1.- 🏳️‍🌈 ${user(a)}_* 
*_2.- 🪂 ${user(b)}_* 
*_3.- 🪁 ${user(c)}_* 
*_4.- 🏳️‍🌈 ${user(d)}_* 
*_5.- 🪂 ${user(e)}_* 
*_6.- 🪁 ${user(f)}_* 
*_7.- 🏳️‍🌈 ${user(g)}_* 
*_8.- 🪂 ${user(h)}_* 
*_9.- 🪁 ${user(i)}_* 
*_10.- 🏳️‍🌈 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })

conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })}
    
if (command == 'topcool') {
let vn = './media/otaku.mp3'
let top = `*🌸 TOP 10 cool person 🌸*
    
*_1.- 💮 ${user(a)}_* 
*_2.- 🌷 ${user(b)}_* 
*_3.- 💮 ${user(c)}_* 
*_4.- 🌷 ${user(d)}_* 
*_5.- 💮 ${user(e)}_* 
*_6.- 🌷 ${user(f)}_* 
*_7.- 💮 ${user(g)}_* 
*_8.- 🌷 ${user(h)}_* 
*_9.- 💮 ${user(i)}_* 
*_10.- 🌷 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })

conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
   
if (command == 'topking') {
let top = `*_💎TOP 10 kings_*
    
*_1.- 💎 ${user(a)}_* 
*_2.- 👑 ${user(b)}_* 
*_3.- 💎 ${user(c)}_* 
*_4.- 👑 ${user(d)}_* 
*_5.- 💎 ${user(e)}_* 
*_6.- 👑 ${user(f)}_* 
*_7.- 💎 ${user(g)}_* 
*_8.- 👑 ${user(h)}_* 
*_9.- 💎 ${user(i)}_* 
*_10.- 👑 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
   
if (command == 'toppornstar') {
let top = `*_😱TOP 10 PORNSTAR OF THE GROUP😱_* 
    
*_1.- 😈 ${user(a)}_* 
*_2.- 🤙 ${user(b)}_* 
*_3.- 🥶 ${user(c)}_* 
*_4.- 🤑 ${user(d)}_* 
*_5.- 🥵 ${user(e)}_* 
*_6.- 🤝 ${user(f)}_* 
*_7.- 😟 ${user(g)}_* 
*_8.- 😨 ${user(h)}_* 
*_9.- 😇 ${user(i)}_* 
*_10.- 🤠 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'toprich') {
let top = `*_😱TOP 10 RICH OF THE GROUP😱_* 
    
*_1.- 😈 ${user(a)}_* 
*_2.- 🤙 ${user(b)}_* 
*_3.- 🥶 ${user(c)}_* 
*_4.- 🤑 ${user(d)}_* 
*_5.- 🥵 ${user(e)}_* 
*_6.- 🤝 ${user(f)}_* 
*_7.- 😟 ${user(g)}_* 
*_8.- 😨 ${user(h)}_* 
*_9.- 😇 ${user(i)}_* 
*_10.- 🤠 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topgirl') {
let top = `*_😏TOP 10 HOT GIRL OF THE GROUP💦_* 
    
*_1.- 🥵 ${user(a)}_* 
*_2.- 🥵 ${user(b)}_* 
*_3.- 🥵 ${user(c)}_* 
*_4.- 🥵 ${user(d)}_* 
*_5.- 🥵 ${user(e)}_* 
*_6.- 🥵 ${user(f)}_* 
*_7.- 🥵 ${user(g)}_* 
*_8.- 🥵 ${user(h)}_* 
*_9.- 🥵 ${user(i)}_* 
*_10.- 🥵 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topsaxy') {
let top = `*_😳TOP SEXIS OF THE GROUP😳_*
    
*_1.- ✨ ${user(a)}_* 
*_2.- ✨ ${user(b)}_* 
*_3.- ✨ ${user(c)}_* 
*_4.- ✨ ${user(d)}_* 
*_5.- ✨ ${user(e)}_* 
*_6.- ✨ ${user(f)}_* 
*_7.- ✨ ${user(g)}_* 
*_8.- ✨ ${user(h)}_* 
*_9.- ✨ ${user(i)}_* 
*_10.- ✨ ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topbeautiful') {
let top = `*_😳TOP MOST BEAUTIFUL AND SEXY OF THE GROUP😳_*
    
*_1.- ✨ ${user(a)}_* 
*_2.- ✨ ${user(b)}_* 
*_3.- ✨ ${user(c)}_* 
*_4.- ✨ ${user(d)}_* 
*_5.- ✨ ${user(e)}_* 
*_6.- ✨ ${user(f)}_* 
*_7.- ✨ ${user(g)}_* 
*_8.- ✨ ${user(h)}_* 
*_9.- ✨ ${user(i)}_* 
*_10.- ✨ ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topmuttel') {
let top = `*_😏TOP MUTTEL OF THE GROUP ARE🔥_* 
    
*_1.- 👉 ${user(a)}_* 
*_2.- 👉 ${user(b)}_* 
*_3.- 👉 ${user(c)}_* 
*_4.- 👉 ${user(d)}_* 
*_5.- 👉 ${user(e)}_* 
*_6.- 👉 ${user(f)}_* 
*_7.- 👉 ${user(g)}_* 
*_8.- 👉 ${user(h)}_* 
*_9.- 👉 ${user(i)}_* 
*_10.- 👉 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topactive') {
let top = `*_🌟TOP ACTIVE PEOPLE IN THE GROUP🌟_* 
    
*_1.- 🛫 ${user(a)}_* 
*_2.- 🥂 ${user(b)}_* 
*_3.- 🤩 ${user(c)}_* 
*_4.- 🛫 ${user(d)}_* 
*_5.- 🥂 ${user(e)}_* 
*_6.- 🤩 ${user(f)}_* 
*_7.- 🛫 ${user(g)}_* 
*_8.- 🥂 ${user(h)}_* 
*_9.- 🤩 ${user(i)}_* 
*_10.- 🛫 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topfamous') {
let top = `*_🌟TOP FAMOUS PEOPLE IN THE GROUP🌟_* 
    
*_1.- 🛫 ${user(a)}_* 
*_2.- 🥂 ${user(b)}_* 
*_3.- 🤩 ${user(c)}_* 
*_4.- 🛫 ${user(d)}_* 
*_5.- 🥂 ${user(e)}_* 
*_6.- 🤩 ${user(f)}_* 
*_7.- 🛫 ${user(g)}_* 
*_8.- 🥂 ${user(h)}_* 
*_9.- 🤩 ${user(i)}_* 
*_10.- 🛫 ${user(j)}_* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'topcouples') {
let top = `*_😍 The 5 wonderful couples of the group 😍_*
    
*_1.- ${user(a)} 💘 ${user(b)}_* 
What a beautiful couple 💖, they invite me to their wedding 🛐

*_2.- ${user(c)} 💘 ${user(d)}_*  
🌹 You deserve the best in the world 💞

*_3.- ${user(e)} 💘 ${user(f)}_* 
So in love 😍, for when the family 🥰

*_4.- ${user(g)} 💘 ${user(h)}_* 
💗 I decree that you are the couple of the year 💗 

*_5.- ${user(i)} 💘 ${user(j)}_* 
Brilliant! 💝, they are on their honeymoon 🥵✨❤️‍🔥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
   
if (command == 'top5couple') {
let top = `*_😍 top 5 couple  😍_*
    
*_1.- ${user(a)} 💘 ${user(b)}_* 
What a beautiful couple 💖, they invite me to their wedding 🛐

*_2.- ${user(c)} 💘 ${user(d)}_*  
🌹 You deserve the best in the world 💞

*_3.- ${user(e)} 💘 ${user(f)}_* 
So in love 😍, for when the family 🥰

*_4.- ${user(g)} 💘 ${user(h)}_* 
💗 I decree that you are the couple of the year 💗 

*_5.- ${user(i)} 💘 ${user(j)}_* 
Brilliant! 💝, they are on their honeymoon 🥵✨❤️‍🔥`
m.reply(top, null, { mentions: conn.parseMention(top) })}
  
}
handler.help = handler.command = ['topgays', 'topcool', 'topking', 'topintegrante', 'toplagrasa', 'topgrasa', 'toppanafrescos', 'toppanafresco', 'toppornstar', 'toprich', 'topgirl', 'topsaxy', 'topbeautiful', 'topmuttel', 'topactive', 'topfamous', 'topcouples', 'top5couple' ]
handler.tags = ['fun']
handler.group = true
export default handler  
