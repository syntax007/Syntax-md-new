let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️Hey! Wait ${msToTime(time - new Date())} to steal again*`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) throw `*[❗]  TAG SOMEONE TO STEAL.*`
if (!(who in global.db.data.users)) throw `*[❗] THE USER IS NOT IN MY DATABASE.*`
let users = global.db.data.users[who]
let rob = Math.floor(Math.random() * ro)
if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} has less than *${ro} xp*\n Don't rob a poor man":`, null, { mentions: [who] })    
global.db.data.users[m.sender].exp += rob
global.db.data.users[who].exp -= rob 
global.db.data.users[m.sender].limit += rob
global.db.data.users[who].limit -= rob 
global.db.data.users[m.sender].money += rob
global.db.data.users[who].money -= rob 
m.reply(`*‣ Robust ${rob} Xp a @${who.split`@`[0]}*`, null, { mentions: [who] })
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['rob']
handler.tags = ['econ']
handler.command = ['robar', 'rob']
export default handler  
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hour(s) " + minutes + " Minute(s)"}

