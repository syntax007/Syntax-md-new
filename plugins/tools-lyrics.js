import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `𝐔𝐬𝐞 𝐞𝐱𝐚𝐦𝐩𝐥𝐞 ${usedPrefix}${command} hallo`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
Lyrics *${result.title}*
Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}

handler.help = ['lyrics']
handler.tags = ['internet','tools']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler