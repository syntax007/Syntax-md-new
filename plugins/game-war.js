let handler = async (m, { conn, usedPrefix, args, command }) => {
  conn.war = conn.war ? conn.war : {}
  conn.war2 = conn.war2 ? conn.war2 : {}

  if (!args[0] || args[0] == "help") return m.reply(`*❏  W A R - Z O N E*

[1] Warzone is a war game with a turn attack system
[2] Games can start with 1v1 up to 5v5
[3] War capital is the spoils of war if your team wins
[4] Each player will get 5000 HP (Health Point)
[5] The success of the attack depends on your level with the level of the enemy to be attacked
[6] Chance to attack is 40 seconds, more than that is considered AFK (2500 HP reduction)
[7] A team will win if the opposing team loses all (HP <= 0) and gets the spoils of war

*❏  C O M M A N D S*
*${usedPrefix + command} join A/B* = join game
*${usedPrefix + command} left* = left game
*${usedPrefix + command} money 10xx* = betting money
*${usedPrefix + command} player* = player game
*${usedPrefix + command} start* = start game`)


  if (args[0] == "money"){
    if (!(m.chat in conn.war)) return m.reply(`*Please create a room first (Type .war join)*`)
    if(m.sender == conn.war[m.chat][0].user){
      if (args[1] != "undefined" && !isNaN(args[1])){
        args[1] = parseInt(args[1])
        if (args[1] < 1000) return m.reply('*Minimal Rp. 1.000*')
        conn.war2[m.chat].money = args[1]
        return m.reply("*Successfully set war capital of Rp. " + Number(args[1]).toLocaleString() + "*")
      }else {
        return m.reply("*Enter the capital of the war bet in the form of numbers (Do not use dots)*\n\n.war money 100000")
      }
    }else {
      return conn.reply(m.chat,`*Only @${conn.war[m.chat][0].user.split('@')[0]} as a room maker who can replace the initial capital of the war*`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
    }
  }

  // JOIN
  if (args[0] == "join"){
    
    if (global.db.data.users[m.sender].money < 1000) return m.reply("*Your money is at least Rp. 1000 for playing this game.*")
    // FIRST PLAYER
    if (!(m.chat in conn.war)) {
      conn.war2[m.chat] = {"war" : false, "turn" : 0, "time" : 0, "money" : 0}
      conn.war[m.chat] = []
      let exp = global.db.data.users[m.sender].exp
      conn.war[m.chat][0] = {"user": m.sender, "hp": 5000, "lvl": global.db.data.users[m.sender].level, "turn" : false}
      for (let i=1;i<10;i++){
        conn.war[m.chat][i] = {"user": "", "hp" : 0, "lvl" : 0, "turn" : false}
      }
      return m.reply(`*Successfully entered the game as Team A*\n\n*.war join a/b* = join game\n*.war start* = start game`)
    }else {   // NOT FIRST PLAYER
      // IF FULL
      if (conn.war2[m.chat].war) {
        return m.reply(`*The game has started, can't join.*`)
      }
      // IF YOU ALREADY JOIN THE GAME
      for (let i = 0; i < conn.war[m.chat].length ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          let total = 0
          for (let i = 0 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              total += 1
            }
          }
          return m.reply(`*You have entered the game*\n\n*.war join a/b* = join game\n*.war start* = start game`)
        }
      }
      
      // JOIN MILIH TIM
      if (args[1]){
        if (args[1].toLowerCase() == "a"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*Please @${conn.war[m.chat][0].user.split('@')[0]} set the initial war capital (minimum Rp. 1.000.000)*\n\n.war money 1000000`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          return m.reply('a')
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*Your money is minimum Rp. ${conn.war2[m.chat].money.toLocaleString()} to play this game.*`)
          for (let i = 1 ; i < 5 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*Successfully entered the game as Team A*\n\n*.war join a/b* = join game\n*.war start* = start game`)
            }
          } 
        }else if (args[1].toLowerCase() == "b"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*Tolong @${conn.war[m.chat][0].user.split('@')[0]} set the initial capital of the war (minimum Rp. 1000000)*\n\n.war money 1000000`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*Your money is at least Rp. ${conn.war2[m.chat].money.toLocaleString()} to play this game.*`)
          for (let i = 5 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*Successfully entered the game as Team B*\n\n*.war join a/b* = join game\n*.war start* = start game`)
            }
          }
        }else {
          return m.reply(`*Choose a team A or B*\n\n.war join A\n.war join B`)
        }
      }else {
        // JOIN SESUAI URUTAN
        return m.reply(`*Choose one team A or B*\n\n.war join A\n.war join B`)
      }
      

      // CHECK IF ROOM FULL
      for (let i = 0 ; i < conn.war[m.chat].length ; i++) {
        let total = 0
        if (conn.war[m.chat][i].user != ""){
          total += 1
        }
        if (total == 10) conn.war2[m.chat].war = true
      }
    }
  }

  // LEFT GAME
  if (args[0] == "left"){
    // IF GAME START
    if (conn.war2[m.chat].war) {
      m.reply(`*The war has started, you can't get out*`)
    }else {   // IF NOT
      for (let i = 0 ; i < 10 ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          return m.reply(`*Successfully exit the game*`)
        }
      }
      return m.reply(`*You are not in the game*`)
    }
  }

  // CEK PLAYER
  if (args[0] == "player"){ 
    if (!(m.chat in conn.war)) return m.reply(`*No players have joined the War Zone room*`)
    var teamA = []
    var teamB = []
    var teamAB = []
    for (let i = 0 ; i < conn.war[m.chat].length ; i++){
      if (i < 5){
        if (conn.war[m.chat][i].user != "") teamA.push(conn.war[m.chat][i].user)
      }else {
        if (conn.war[m.chat][i].user != "") teamB.push(conn.war[m.chat][i].user)
      }
      teamAB.push(conn.war[m.chat][i].user)
    }
    // return m.reply(teamA[0])
    conn.reply(m.chat, `${conn.war2[m.chat].war ? '*Giliran : ' + '@' + conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0] + '*\n*Taruhan : Rp. ' + Number(conn.war2[m.chat].money).toLocaleString() + '*\n\n' : '*Taruhan : Rp. ' + Number(conn.war2[m.chat].money).toLocaleString() + '*\n\n' }*TEAM A :*\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${conn.war[m.chat][i].lvl} HP: ${conn.war[m.chat][i].hp})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${conn.war[m.chat][i+5].lvl} HP: ${conn.war[m.chat][i+5].hp})`).join`\n`,m, {contextInfo: {
      mentionedJid: teamAB
    }})
  }

  // START GAME
  if (args[0] == "start"){
    if (conn.war2[m.chat].war) return m.reply(`*The war has started, can't join.*`)
    teamA = 0
    teamB = 0
    for (let i=0;i<10;i++){
      if(i<5){
        if (conn.war[m.chat][i].user != "") teamA += 1
      }else{
        if (conn.war[m.chat][i].user != "") teamB += 1
      }
    }

    if (teamA == teamB && teamA > 0){
      conn.war2[m.chat].war = true
      for (let i=0;i<5;i++){
        if (conn.war[m.chat][i].user != ""){
          let user = conn.war[m.chat][i].user
          return conn.reply(m.chat,`*Game started successfully*\n*Please @${user.split('@')[0]} to attack the enemy*\n\n.war player = player stats\n.attack @tag = attack opponent`, m, {contextInfo: { mentionedJid: [user] }})
        }
      }
    }else {
      if (teamA > teamB){
        m.reply(`*Team B is less ${teamA-teamB} more people to make the game fair.*`)
      }else {
        m.reply(`*Team A is less ${teamB-teamA} more people to make the game fair.*`)
      }
    }
  } else {
  throw 'Join'
  }

}
handler.help = ['war']
handler.tags = ['game']
handler.command = /^(war)$/i
handler.group = true
export default handler