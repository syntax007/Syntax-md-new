//import { areJidsSameUser } from '@adiwajshing/baileys'
let { areJidsSameUser } = (await import(global.baileys)).default
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
    
if (command == 'featurecouple') {    
let caption = `💗 FUTURE COUPLE 💗\n${toM(a)} 💞 ${toM(b)}\n\n💌 love message\n*_${await ktnmbk.getRandom()}_*`
await conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })

}}
	
if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return await conn.reply(m.chat, `𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)

	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
	
if(!users) return await conn.reply(m.chat, `𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙒𝘼𝙎 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿, 𝙏𝙃𝙀𝙔 𝙈𝙐𝙎𝙏 𝘽𝙀 𝙄𝙉 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋`, fkontak,  m)

	
if(user === m.sender) return await conn.reply(m.chat, `𝙔𝙊𝙐 𝙔𝙊𝙐𝙍𝙎𝙀𝙇𝙁 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak,  m)

	
if(user === conn.user.jid) return await conn.reply(m.chat, `𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, fkontak,  m)

if (typeof global.db.data.users[user] == "undefined") return await conn.reply(m.chat, `𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙄 𝙏𝘼𝙂 𝙄𝙎 𝙉𝙊𝙏 𝙄𝙉 𝙈𝙔 𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀`, fkontak,  m)

	
let pacar = global.db.data.users[user].pasangan
let spac = global.db.data.users[m.sender].pasangan
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){

}else if(global.db.data.users[user].pasangan != ""){
	
if (pacar){
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `you're already leaving ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
conn.reply(m.chat, `you're already leaving *${await conn.getName(user)}* 𝙔 ${await conn.getName(pacar)} ARE IN A RELATIONSHIP\nLOOK FOR ANOTHER PERSON WHO WANTS TO BE YOUR PARTNER`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
}else{
	
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\n you just invited @${user.split('@')[0]}\n\n¡Please wait for a response!`, m , { contextInfo: { mentionedJid: [user]}})
}	
	
}else if (global.db.data.users[user].pasangan == m.sender){
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `Congratulations, you are officially dating @${user.split('@')[0]}\n\n May it last forever and always be happy 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [user]}})
}else {
	
global.db.data.users[m.sender].pasangan = user
await conn.reply(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*@${toUser}* is declaring!!! 😳\n please *@${who.split`@`[0]}* respond to the statement 🙀\n\n❤️ *_If you want a relationship write:_*\n*➠ ${usedPrefix}accept @${toUser}*\n\n💔 *_If you don't want a relationship, write:_*\n*➠ ${usedPrefix}reject @${toUser}*\n\n${wm}`, m, { contextInfo: { mentionedJid: [ who, m.sender, user ]}})

}}}
handler.help = ['prapose']

handler.tags = ['relationship'] 
handler.command = /^(featurecouple|prapose)$/i
handler.group = true

export default handler

let ktnmbk = [
"There are times when I don't like to be alone. But I don't want everyone to accompany me either, I just want you",
"I just realized you've been rich this whole time! Like what I've been looking for all this time. Do you want to be my girlfriend?",
"I thank my eyes, because these eyes led me to find you,",
"Can I send you a CV or not? Because I want to apply to be a girlfriend",
"I'm not the greatest, but I'm sure that if I can make you happy with love and affection, you love me right?",
"I am just an ordinary person who has many flaws and may not deserve your love, but if you are willing to accept me as a lover, I promise to do what is best for you. Will you accept my love?",
"I want to say something. I've liked it for a long time, but I don't dare say it. So, I decided to just WA. I want you to be my girlfriend",
"I want to say something that I can't contain anymore. I love you, will you be my girlfriend?",
"I want to be a person who can make you laugh and smile every day. Will you be my girlfriend?",
"I want to have a serious talk with you. All this time I have harbored feelings for you and I have always been aware of you. If you don't mind, do you want to be my girlfriend?",
"I look at you and see the rest of my life before my eyes.",
"I don't have everything, but at least I have enough love for you",
"I liked you from the beginning. You are so simple, but simplicity is very special in my eyes. It will be perfect if you are special in my heart",
"I'm really in love with you. You will be mine?",
"I didn't say no to you because I don't have room or credit, but I'm enjoying this longing for you. You might be surprised to hear that. I have always liked you",
"I don't want you to be the sun of my life, because even though it's hot, you're very far away. I also don't want you to be air, because although I need you and you are very close, but everyone can breathe you too. Just what",
"I don't know how long my age will end. All I know is that my love is forever just for you",
"I really enjoyed the time we spent together today. We've also known each other for a long time. On this sunny day, I want to express to you that I love you",
"I always imagined how beautiful it would be if one day we could build an ark of a house and live together until the end of life. However, all of that would not have happened if the two of us had not",
"I mentally prepare myself for today. You have to be my girlfriend to deal with this uncontrollable love",
"I know we're not the same age, but can I live with you for the rest of my life?",
"I know we've been friends for a long time. But isn't it bad if I like you? Whatever your answer is, I accept. The most important thing is to be honest from the bottom of my heart",
"I can't start this first, but I'll give you some code that I like. If you understand this code, we will be together",
"Am I too stupid or are you too selfish to make me fall in love with you?",
"Anything about you, I have never found boredom in it. Because being by your side, the most beautiful gift for me. Be my lover, hey you",
"With the permission and mom dad's blessing, do you want to be my boyfriend or not?",
"What if we become a gang of thieves? I stole your heart and you stole mine",
"Happy is that you and I have become us",
"Tomorrow, if it doesn't work out, I can register to be your girlfriend. Let me have work to always think of you",
"Let me make you happy forever. You only have to do one thing: Fall in love with me",
"May all my joy be yours, all your sadness be mine. May the whole world be yours, only you be mine!",
"Let the past be my past, but for the present, will you be my future?",
"Can you give me a direction to your heart? It seems that I have lost myself in your eyes",
"It is not the throne or the treasure that I seek, but the return of my love that I expect from you. The answer is yes",
"The way you can make me laugh even on the darkest days makes me feel lighter than anything else. I want you to be mine",
"My love for you is unquestionable because this love is sincere from the bottom of my heart",
"My love for you is like a number from 5 to 10. There is no second. I want you to be the only woman in my heart",
"What boy dares to hurt you. Here I will treat you, as long as you want to be my girlfriend",
"Hey, what are you doing? She leaves the house and looks at the moon tonight. The light is beautiful and charming, but it would be even more beautiful if I were by your side. How about we be together?"
]