import crypto from 'crypto'

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Unable to use referral code!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Invalid referral code'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Congratulations!
+${xp_first_time} XP
`.trim())
    m.reply(`
Someone has used your referral code
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Get it ${xp_first_time} XP for those who use the link / referral code below

Referal Code: *${code}*

${command_link}
`.trim()
    m.reply(`
Get it ${xp_link_creator} XP for every new user who uses your referral code
${users[m.sender].ref_count} people have used your referral code

Your referral code: ${code}

Share link with friends: ${command_link}

or message a friend wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orange = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['main', 'xp']

handler.command = ['ref']

handler.register = true

export default handler
