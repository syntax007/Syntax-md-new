import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗]  *𝐄𝐍𝐓𝐄𝐑 𝐓𝐇𝐄 𝐍𝐀𝐌𝐄 𝐘𝐎𝐔 𝐖𝐀𝐍𝐓 𝐓𝐎 𝐁𝐄 𝐓𝐇𝐄 𝐍𝐄𝐖 𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄*`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] *';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;