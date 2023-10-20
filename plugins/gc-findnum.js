

const handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {
  if (!args[0]) return m.reply(`*[❗] 𝙀𝙉𝙏𝙀𝙍 𝘼 𝘾𝙊𝙐𝙉𝙏𝙍𝙔 𝙋𝙍𝙀𝙁𝙄𝙓 𝙏𝙊 𝙎𝙀𝘼𝙍𝘾𝙃 𝙁𝙊𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝙄𝙉 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋 𝙊𝙁 𝙏𝙃𝘼𝙏 𝘾𝙊𝙐𝙉𝙏𝙍𝙔: ${usedPrefix + command} +91*`);
  if (isNaN(args[0])) return m.reply(`*[❗] 𝙀𝙉𝙏𝙀𝙍 𝘼 𝘾𝙊𝙐𝙉𝙏𝙍𝙔 𝙋𝙍𝙀𝙁𝙄𝙓 𝙏𝙊 𝙎𝙀𝘼𝙍𝘾𝙃 𝙁𝙊𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝙄𝙉 𝙏𝙃𝙀 𝙂𝙍𝙊𝙐𝙋 𝙊𝙁 𝙏𝙃𝘼𝙏 𝘾𝙊𝙐𝙉𝙏𝙍𝙔: ${usedPrefix + command} +91*`);
  const lol = args[0].replace(/[+]/g, '');
  const ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (ps == '') return m.reply(`*[❗] NOT FOUND  +${lol}*`);
  const numeros = ps.map((v)=> '🐣 @' + v.replace(/@.+/, ''));
  const delay = (time) => new Promise((res)=>setTimeout(res, time));
  switch (command) {
    case 'listnum':
      conn.reply(m.chat, `*𝘼 𝙇𝙄𝙎𝙏 𝙊𝙁 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝙒𝙄𝙏𝙃 𝙏𝙃𝙀 𝘾𝙊𝙐𝙉𝙏𝙍𝙔 𝘾𝙊𝘿𝙀  +${lol} :*\n\n` + numeros.join`\n`, m, {mentions: ps});
      break;
    case 'kicknum':
      if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] THE OWNER OF THE BOT DOES NOT HAVE THE RESTRICTIONS ENABLED (#enable restrict) CONTACT HIM TO ENABLE IT*');
      if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙈𝙖𝙠𝙚 𝙢𝙚 𝙖𝙙𝙢𝙞𝙣 𝙛𝙞𝙧𝙨𝙩*');
      conn.reply(m.chat, `*[❗] REMOVE +${lol}, EVERY 10 SECOND*`, m);
      const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
      const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
      for (const user of users) {
        const error = `@${user.split('@')[0]} ALREADY DELETED*`;
        if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
          await delay(2000);
          const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)});
          await delay(10000);
        } else return m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁*');
      }
      break;
  }
};
handler.command = /^(listnum|kicknum)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;