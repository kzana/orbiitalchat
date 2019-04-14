const Discord = require("discord.js");

const bot = new Discord.Client();

bot.login("NTYxNDgzMDUwNTkzMjg4MjMy.XKDvsg.Nzq-7lg_Vqq_74jRq_IrO-6tCiE");

bot.on("error", function() {
  message.channel.send({embed: {
    color: 3447003,
    description: 'Erreur: une erreur est survenue !'
  }});
})

var PREFIX = "/";

bot.on("ready", function() {
bot.user.setGame("");
console.log("Jsuis Prêt Frr !");
})

bot.on('message', message => {
  var author = message.member.displayName;
  var mention = "<@" + message.member.user.id + ">";
  var value = message.content;
  var messlow = value.toLowerCase();
  let args = messlow.split(" ");
  const cmd = args[0];
  const cmdlength = cmd.length + 1;
});

bot.on("guildMemberAdd", member => {
  const baseServer = bot.guilds.get("530337552050290698");
  const bienvenue = bot.channels.get("558759331781410847");
  const embed = new Discord.RichEmbed()
  .setTitle("Nouveau membre")
  .setDescription(member.displayName + " est arrivé sur le serveur " + baseServer.name)
  .setThumbnail(member.user.avatarURL)
  .setColor('#78ff81')
  .setTimestamp();
  bienvenue.send(embed);
  member.addRole("530345467998109697");
});

bot.on("guildMemberRemove", member => {
  const baseServer = bot.guilds.get("530337552050290698");
  const bienvenue = bot.channels.get("558759331781410847");
  const embed = new Discord.RichEmbed()
  .setTitle("Un Membre en moins")
  .setDescription(member.displayName + " a quitté le serveur " + baseServer.name + "\nNous lui souhaitons une bonne continuation ^-^")
  .setThumbnail(member.user.avatarURL)
  .setColor('#ff2f2f');
  bienvenue.send(embed);
  

});

bot.on('channelCreate', message => {
  const slt = bot.channels.get("564892374040313859")
  const embed = new Discord.RichEmbed()
  .setTitle("Nouveau Channel !")
  .setDescription("Un channel a était créé !")
  .setColor("#78ff81")
  .setTimestamp()
  slt.send(embed);
})

bot.on('channelDelete', message => {
  const slt = bot.channels.get("564892374040313859")
  const embed = new Discord.RichEmbed()
  .setTitle("Channel Supprimé !")
  .setDescription("un channel à été supprimé !")
  .setColor("#fd0000")
  .setTimestamp()
  slt.send(embed);
})

bot.on('channelUpdate', message => {
  const slt = bot.channels.get("564892374040313859")
  const embed = new Discord.RichEmbed()
  .setTitle("Channel Modifié !")
  .setDescription("un channel à été Modifié !")
  .setColor("#fd0000")
  .setTimestamp()
  slt.send(embed);
})


bot.on('roleCreate', message =>{
  const slt = bot.channels.get("564892374040313859")
  const embed = new Discord.RichEmbed()
  .setTitle("Nouveau Rôle !")
  .setDescription("Un nouveau rôle a été créé !" + Role)
  .setColor("#78ff81")
  .setTimestamp()
  slt.send(embed);
})

bot.on('roleDelete', message =>{
  const slt = bot.channels.get("564892374040313859")
  const embed = new Discord.RichEmbed()
  .setTitle("Rôle Supprimé !")
  .setDescription("Un rôle a été supprimé !")
  .setColor("#fd0000")
  .setTimestamp()
  slt.send(embed);
})

bot.on('roleUpdate', message =>{
  const slt = bot.channels.get("564892374040313859")
  const embed = new Discord.RichEmbed()
  .setTitle("Rôle Modifié !")
  .setDescription("Un rôle a été Modifié !")
  .setColor("#0576f4")
  .setTimestamp()
  slt.send(embed);
})

bot.on('emojiCreate', message =>{
  const slt = bot.channels.get("551148182109945882")
  const embed = new Discord.RichEmbed()
  .setTitle("Nouvelle Emoji !")
  .setDescription("Un nouvelle emoji a été créé")
  .setColor("#78ff81")
  .setTimestamp()
  slt.send(embed);
})

bot.on('emojiDelete', message =>{
  const slt = bot.channels.get("551148182109945882")
  const embed = new Discord.RichEmbed()
  .setTitle("Emoji Supprimé !")
  .setDescription("Un emoji a été supprimé !")
  .setColor("#78ff81")
  .setTimestamp()
  slt.send(embed);
})

bot.on('emojiUpdate', message => {
  const slt = bot.channels.get("564892374040313859")
  const embed = new Discord.RichEmbed()
  .setTitle("Channel Supprimé !")
  .setDescription("un channel à été supprimé !")
  .setColor("#fd0000")
  .setTimestamp()
  slt.send(embed);
})

bot.on('message', message => {
  if(message.content === PREFIX + '') {
    message.channel.send(embed)
    .setTitle("")
  }
})

