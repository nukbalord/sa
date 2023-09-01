const Discord = require("discord.js");

exports.run = async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("Reload")
        .setDescription("Bu komutu sadece sahibim kullanabilir..")
        .setColor("#cdf785");
        if(message.author.id !== '767092687584755743') return message.channel.send(embed);

        if(!args[0].toLowerCase()) return message.channel.send("reloadbot")

        let komutİsim = args[0].toLowerCase()

        try {
          
          delete require.cache[require.resolve(`./${komutİsim}.js`)]
          const pull = require(`./${komutİsim}.js`)
          client.commands.set(pull.help.name, pull)
          message.channel.send(`Yeniden Başlatıldı: \`${komutİsim}\``)
        }

        catch (e) {
          console.log(e)
          return message.channel.send(`Komut Yeniden Yüklenemedi: ${komutİsim} \n${e}`)
        }


      }


exports.conf = {
    aliases: ['komutyenile','yenile','reload'],
    permLevel: 0,
    kategori: "Sahip"
};

exports.help = {
    name: "komut-yenile",
    description: "Belirttiğiniz komutu yeniden başlatır.",
    usage: "komut-yenile"
};

