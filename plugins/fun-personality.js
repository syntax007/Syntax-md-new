let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'tag someone', m)
	
  let personalidad = `
┏━━°❀❬ *personality* ❭❀°━━┓
*┃*
*┃• Number* : ${text}
*┃• good* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• bad* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• type of person* : ${pickRandom(['Good-hearted','Arrogant','Stingy','Generous','Humble','Shy','Coward','Messy','Cristal','Non-binary XD', 'Asshole'])}
*┃• Always* : ${pickRandom(['Heavy','Bad','Distracted','Annoying','Gossipy','Gossiping','Shopping','Watching anime','Chat on WhatsApp because he is single','Lying down good for nothing ','A womanizer','On the cell phone'])}
*┃• Intelligence* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• delinquency* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Courage* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Fear* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• hit* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Gender* : ${pickRandom(['Hombre', 'Mujer', 'Homosexual', 'Bisexual', 'Pansexual', 'Feminista', 'Heterosexual', 'Macho alfa', 'Mujerzona', 'Marimacha', 'Palosexual', 'PlayStationSexual', 'Sr. Manuela', 'Pollosexual'])}
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personality *<tag>*']
handler.tags = ['fun']
handler.command = /^personality/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}