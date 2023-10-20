let handler = async (m, { conn, args }) => {
    await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
    m.reply('*┌── ⋆⋅☆⋅⋆ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜 𝚌𝚑𝚊𝚗𝚐𝚒𝚗𝚐 𝚃𝚑𝚎 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗 𝚘𝚏 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙  ⋆⋅☆⋅⋆ ──┘*')
    }
    handler.help = ['Setdesc <text>']
    handler.tags = ['group']
    handler.command = /^setdesk|setdesc$/i
    handler.group = true
    handler.admin = true
    handler.botAdmin = true
    export default handler