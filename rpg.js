import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import axios from "axios";


global.Key360 = ["964f-0c75-7afc"];
   
  

global.wa = "http://wa.me/917821096044";
global.king = "Syntax king 👑";
global.menuvid = 'https://telegra.ph/file/085c4b1068f0f4f8db970.mp4';
global.vs = "syntax king 👑";
global.vsJB = "2.0";

global.shizokeys = 'shizo'
global.piesmsg = '_Pies 🥵💦_'
global.dygp = "https://youtube.com/@samcreation8299?si=DaA4bIteDmAgYi4q"

global.wm = "syntax-md : Syntax king";
global.igfg = "Syntax-md";
global.wait = "*⌛ _Charging..._ ▬▭▭▭▭▭▭*";

global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = "GataDios";
global.itsrose = ["4b146102c4d500809da9d1ff"];
global.baileys = "@whiskeysockets/baileys";

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
};


global.multiplier = 60; 


global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: '🧬 Level',
      limit: '💎 Diamond',
      exp:  '⚡ Experience',
      bank: '🏦 Banco : Bank',
      diamond: '💎+ Diamond+',
      health: '❤️ Health',
      kyubi: '🌀 Magic',
      joincount: '🪙 Token' ,
      emerald: '💚 Emerald' ,
      stamina: '✨ Energy',
      role: '💪 Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Point Xp',
      gold: '👑 Gold',
      
      trash: '🗑 Trash',
      crystal: '🔮 Crystal',
      intelligence: '🧠 Intelligence',
      string: '🕸️ String' ,
      keygold: '🔑 : Key Gold',
      keyiron: '🗝️ : Key Iron',
      emas: '🪅 Pinata',
      fishingrod: '🎣 : Fishing Rod',
      gems: '🍀 : Gamas',
      magicwand: '⚕️ : Magic Wand',
      mana: '🪄 : Spell',
      agility: '🤸‍♂️ : Agility',
      darkcrystal: '♠️ : Dark Glass',
      iron: '⛓️ Iron',
      rock: '🪨 Rock',
      potion: '🥤 Potion',
      superior: '💼 Superior',
      robo: '🚔 : Robo',
      upgrader: '🧰 : Upgrade',
      wood: '🪵 Wood',
      
      strength: '🦹‍ ♀️ : Strength',
      arc: '🏹 : Arc',
      armor: '🥼 : Armor',
      bow: '🏹 : Super Bow',
      pickaxe: '⛏️ : Peak',
      sword: '⚔️ Sword',
      
      common: '📦 Common Box' ,
      uncoommon: '🥡 Uncommon Box',
      mythic: '🗳️ Mythic Box',
      legendary: '🎁 Legendary Box',
      petFood: '🍖 Pet Food', //?
      pet: '📫 Pet Box',//?
      
      bibitanggur: '🌾🍇 Grape seeds' , bibitapel: '🌾🍎 Apple seeds' , bibitjeruk: '🌾🍊 Orange seeds', bibitmangga: '🌾🥭 Mango Seeds', bibitpisang: '🌾🍌 Banana seeds',
      
      ayam: '🐓 : Chicken',
      babi: '🐖 : Pig',
      Jabali: '🐗 : Wild Boar',
      bull: '🐃 : Bull',    
      buaya: '🐊 : Alligator',    
      cat:  '🐈 Cat' ,    
      centaur: '🐐 Centaur',
      chicken: '🐓 : Chicken',
      cow: '🐄 : Cow', 
      dog: '🐶 Dog' ,
      dragon: '🐉 Dragon',
      elephant: '🐘 : Elephant',
      fox: '🦊 Fox',
      giraffe: '🦒: Giraffe',
      griffin: '🦅 Bird', 
      horse: '🐎 Horse' ,
      kambing: '🐐 Goat',
      kerbau: '🐃 : Buffalo',
      lion: '🦁 : Lion',
      money: '💰 Coins',
      monyet: '🐒 : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 : Snake',
      phonix: '🕊️ : Phoenix',
      rhinoceros: '🦏 : Rhinoceros',
      wolf: '🐺 Wolf',
      tiger: '🐅 : Tiger',
      cumi: '🦑 : Squid',
      udang: '🦐 : Shrimp',
      ikan: '🐟 : Fish',
      
      fideos: '🍝 : Noodles',
      ramuan: '🧪 : Ingredients',
      knife: '🔪 : Knife'
    };
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase();
    let emottt = {
      exp: '⚡ Experience', limit: '💎 Diamond', diamond: '💎+ Diamond+' , joincount: '🪙 Token',
      emerald: '💚 Emerald', berlian: '♦️ Jewel' , kyubi: '🌀 Magic', gold: '👑 Gold',
      money: '🤑 Coins', tiketcoin: '🎫 Tickers' , stamina: '✨ Energy',
            
      potion: '🥤 Potion' , aqua: '💧 Water', trash: '🗑 Trash', wood: '🪵 Wood',
      rock: '🪨 Rock', batu: '🥌 Stone', string: '🕸️ String', iron: '⛓️ Iron',
      coal: '⚱️ Coal', botol: '🍶 Bottle', kaleng: '🥫 Can' , kardus: '🪧 Paperboard',
      
      eleksirb: '💡 Electricity' , emasbatang:  '〽️ Gold bar', emasbiasa: '🧭 Common Gold', rubah: '🦊🌫️ Big Fox' ,
      sampah: '🗑🌫️ Super Trash', serigala: '🛷🌫️ Super Wood' , kayu: '🛷🌫️ Super Wood', sword: '⚔️ Sword',
      umpan: '🪱 Bait' , healtmonster: '💵 Banknotes', emas:  '🪅 Pinata', pancingan: '🪝 Hook',
      pancing: '🎣 Fishing Rod',
       
      common: '📦 Common Box', uncoommon: '🥡 Uncommon Box', mythic: '🗳️ Mythic Box',
      pet: '📫 Pet Box',//?
      gardenboxs: '💐 Gardening Box',//?
      legendary: '🎁 Legendary Box',
      
      anggur: '🍇 Grape', apel: '🍎 Apple' , jeruk: '🍊 Orange', mangga: '🥭 Mango', pisang: '🍌 Banana',
      
      bibitanggur: '🌾🍇 Grape seeds', bibitapel: '🌾🍎 Apple seeds' , bibitjeruk: '🌾🍊 Orange seeds' , bibitmangga: '🌾🥭 Mango Seeds' , bibitpisang: '🌾🍌 Banana seeds',
      
      centaur: '🐐 Centaur', griffin: '🦅 Bird' , kucing: '🐈 Cat', naga: '🐉 Dragon',
      fox: '🦊 Fox' , kuda: '🐎 Horse' , phonix: '🕊️ Phoenix' , wolf: '🐺 Wolf',
      anjing: '🐶 Dog',
 
      petFood: '🍖 Pet Food', //?
      makanancentaur: '🐐🥩 Centaur Food', makanangriffin: '🦅🥩 Bird Food',
      makanankyubi: '🌀🥩 Magic Food', makanannaga: '🐉🥩 Dragon Food', makananpet: '🐎🥩 Horse Food', makananphonix: '🕊️🥩 Phoenix Food' 
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }
};





global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase();
    let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
    };
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }
};



global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase();
    let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '🐱', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }
};

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'rpg.js'"));
  import(`${file}?update=${Date.now()}`);
});
