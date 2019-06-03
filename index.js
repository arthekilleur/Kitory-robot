const Discord = require('discord.js');
const client = new Discord.Client();




var prefix = "_"
var prefix2 = "Atk//"
 
client.login("NTgyMjYzMTU2OTcwMzU2NzY2.XPQFFg.SpiQ6kGtoXyywAisFjeWIP5JIU0")
 
client.on("ready", () =>{
    console.log("Je suis prêt a aider des serveur")
    client.user.setGame("Mangaca")
});


client.on('message', async message => {



  




 


        
    if(message.content === prefix + "serveurinfo"){
                var help_embed = new Discord.RichEmbed()
                .setColor("#00FF00")
                .setTitle("Serveurinfo")
        .setDescription("je m'excuse la commande ne peut pas être réglée en français tout dumoin pas pour le moment")
        .addField("Nom du discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.guild.joinedAt)
        .addField("Sur le serveur nous somme", message.guild.memberCount)
                .setThumbnail(message.author.avatarURL)
                .setTimestamp()
        .setFooter("bot déveloper par ⁉[AR]Arthekilleur[AR]⁉")
                message.channel.send(help_embed);
            }

        if(message.content === prefix + "invite"){
                    var help_embed = new Discord.RichEmbed()
                    .setColor("#00FF00")
            .setTitle("Vouala mon invitation")
                    .setDescription("https://discordapp.com/api/oauth2/authorize?client_id=582263156970356766&permissions=8&scope=bot")
                    .setTimestamp()
                    message.channel.send(help_embed);
                }
        
    
        

        if(message.content === prefix + "Bonjour"){
            message.reply("Salut,cv?")
            console.log("Le bot dit bonjour")
        }

    if(message.content === prefix + "BONJOUR"){
                message.reply("Salut,cv?")
                console.log("Le bot dit bonjour")
            }

        if(message.content === prefix + "bonjour"){
                    message.reply("Salut,cv?")
                    console.log("Le bot dit bonjour")
                }
             if(message.content === prefix2 + "Bonjour"){
                        message.reply("Salut,cv?")
                        console.log("Le bot dit bonjour")
                    }
            
                if(message.content === prefix2 + "BONJOUR"){
                            message.reply("Salut,cv?")
                            console.log("Le bot dit bonjour")
                        }
            
                    if(message.content === prefix2 + "bonjour"){
                                message.reply("Salut,cv?")
                                console.log("Le bot dit bonjour")
                            }

       


    if(message.content === prefix + "help"){
            var help_embed = new Discord.RichEmbed()
            .setColor("#00FF00")
            .setTitle("commande admin")
    .setFooter("bot déveloper par ⁉[AR]Arthekilleur[AR]⁉")
            .setDescription("Voici mes commande")
    .addField(":x:Modération:x:", ("'''_kick/ _ban/ _mute/ _unmute/ _clear'''"))
    .addField(":beginner:Utilitaire:beginner: ", "_help, _warning, _serveurinfo")
            .setThumbnail(message.author.avatarURL)
    .addField("Rejoin le serveur du bot pour plud d'aide", "https://discord.gg/nTeZF5y")
            .setTimestamp()
            message.channel.send(help_embed);
    console.log("Le bot aide")
        }

    if(message.content === prefix + "Warning"){
                var help_embed = new Discord.RichEmbed()
                .setColor("#00FF00")
                .setTitle("Attention!!!")
        .setFooter("bot déveloper par ⁉[AR]Arthekilleur[AR]⁉")
                .setDescription("Si la commande mp est utiliser a Répétition est si cela continue vous serez Black liste!!!")
                .setTimestamp()
                message.channel.send(help_embed);
            }

    
    if(message.content === prefix + "history"){
                var help_embed = new Discord.RichEmbed()
                .setColor("#00FFCC")
                .setTitle("Voici mon histoire")
                .setDescription("Tout commença le 19 Août 2009, le jour de mes 15ans mon père ma offert une épée qui me servira plus tard lors de mes 18ans mon grand père qui esta ce jour mort ma inscrit dans une école de ninja j'aitez très heureux je pue rencontrer plein de personne de mon age un jour quand il fallue que je parte car j'avait fini mais étude j'était triste les jour continuez a anvançer quans même un jour le marcahit tranquillement dans la rue et je vit un personne vêtut d'habit sombre me parèser pas très nette avec son sabre il me fesait peur j'eu peur quelque pas sufisait pour qu'il me tue par rencune j'avait avançer est......:pensive:  il m'avait donner un coup d'épée sur coté droit de mon visage c'est pour ça que sur ma photo vous voyer le coté gauche de mon visage quelque anée plus tard....")
                .setTimestamp()
                .addField("une suite prochainement", "j'espère que le debut vous a plus :wink:")
                message.channel.send(help_embed);
            }


   



            
    
         
            
         
             
             if(message.content === prefix + "oui et toi"){
                        message.reply("oui tfk?")
                        console.log("Le bot demande si cv")
                    }

                  if(message.content === prefix + "rien"){
                            message.reply("ok")
                            console.log("Le bot demande si cv")
                        }

                      if(message.content === prefix + "rien et toi"){
                                message.reply("je joue a atk/help")
                                console.log("Le bot demande si cv")
                            }

                        if(message.content === prefix + "oui"){
                                    message.reply("ok tfk?")
                                    console.log("Le bot demande si cv")
                                }

                            if(message.content === prefix + "Oui"){
                                    message.reply("ok tfk")
                                    console.log("Le bot demande si cv")
                                }
                             
                             if(message.content === prefix + "Oui et toi"){
                                        message.reply("oui tfk?")
                                        console.log("Le bot demande si cv")
                                    }
                
                                  if(message.content === prefix + "Rien"){
                                            message.reply("ok")
                                            console.log("Le bot demande si cv")
                                        }
                
                                      if(message.content === prefix + "Rien et toi"){
                                                message.reply("je joue a atk/help")
                                                console.log("Le bot demande si cv")
                                            }

                        
                        
                             
                                if(message.content === prefix2 + "OUI"){
                                        message.reply("ok tfk")
                                        console.log("Le bot demande si cv")
                                    }
                                 
                                 if(message.content === prefix2 + "OUI ET TOI"){
                                            message.reply("oui tfk?")
                                            console.log("Le bot demande si cv")
                                        }
                    
                                      if(message.content === prefix2 + "RIEN"){
                                                message.reply("ok")
                                                console.log("Le bot demande si cv")
                                            }
                    
                                          if(message.content === prefix2 + "RIEN ET TOI"){
                                                    message.reply("je joue a atk/help")
                                                    console.log("Le bot demande si cv")
                                                }

                                            if(message.content === prefix2 + "oui et toi"){
                                                        message.reply("oui tfk?")
                                                        console.log("Le bot demande si cv")
                                                    }
                                
                                                  if(message.content === prefix2 + "rien"){
                                                            message.reply("ok")
                                                            console.log("Le bot demande si cv")
                                                        }
                                
                                                      if(message.content === prefix2 + "rien et toi"){
                                                                message.reply("je joue a atk/help")
                                                                console.log("Le bot demande si cv")
                                                            }
                                
                                                        if(message.content === prefix2 + "oui"){
                                                                    message.reply("ok tfk?")
                                                                    console.log("Le bot demande si cv")
                                                                }
                                
                                                            if(message.content === prefix2 + "Oui"){
                                                                    message.reply("ok tfk")
                                                                    console.log("Le bot demande si cv")
                                                                }
                                                             
                                                             if(message.content === prefix2 + "Oui et toi"){
                                                                        message.reply("oui tfk?")
                                                                        console.log("Le bot demande si cv")
                                                                    }
                                                
                                                                  if(message.content === prefix2 + "Rien"){
                                                                            message.reply("ok")
                                                                            console.log("Le bot demande si cv")
                                                                        }
                                                
                                                                      if(message.content === prefix2 + "Rien et toi"){
                                                                                message.reply("je joue a atk/help")
                                                                                console.log("Le bot demande si cv")
                                                                            }
                                
                                                        
                                                        
                                                             
                                                                if(message.content === prefix2 + "OUI"){
                                                                        message.reply("ok tfk")
                                                                        console.log("Le bot demande si cv")
                                                                    }
                                                                 
                                                                 if(message.content === prefix2 + "OUI ET TOI"){
                                                                            message.reply("oui tfk?")
                                                                            console.log("Le bot demande si cv")
                                                                        }
                                                    
                                                                      if(message.content === prefix2 + "RIEN"){
                                                                                message.reply("ok")
                                                                                console.log("Le bot demande si cv")
                                                                            }
                                                    
                                                                          if(message.content === prefix2 + "RIEN ET TOI"){
                                                                                    message.reply("je joue a atk/help")
                                                                                    console.log("Le bot demande si cv")
                                                                                }

                      

    if(message.content === prefix + "ping"){
                message.reply("pong!?")
                console.log("Le bot dit bonjour")
            }

        if(message.content === prefix2 + "ping"){
                    message.reply("ping!")
                    console.log("Le bot dit bonjour")
                }
        
            if(message.content === prefix + "Bonjour"){
                        message.reply("bravo tu as gagner")
                        console.log("Le bot dit bonjour")
                    }

                if(message.content === prefix2 + "ping!"){
                            message.reply("bravo tu as gagner")
                            console.log("Le bot dit bonjour")
                        }
                


          


                    
                  
                    if(message.content.startsWith(prefix + "mp")) {
 
                        var args = message.content.split(" ").slice(1);
                        var msge = args.join(' ');
                
                        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
                        if(!msge) return message.channel.send("Precise un message")
                
                        var mpall = new Discord.RichEmbed()
                        .setThumbnail(client.user.avatarURL)
                        .setDescription("Le serveur du bot: https://discord.gg/DGSsx3P")
                        .setTimestamp()
                        .setColor("RANDOM")
                        .addField("Tu as reçu un nouveau message", msge);
                        message.delete()
                        message.guild.members.map(m => m.send(mpall))
                    }
                


                    if(message.content === prefix + "support"){
                        message.delete()
                                message.reply("si tu as besois d'aide rejoin le serveur officiel: https://discord.gg/YRwJk57")
                                console.log("Le bot dit bonjour")
                            }

                                    

                                            if(message.content === "FDP"){
                                                message.delete()
                                                      message.reply("merci déviter toute forme d'insulte!!!!?")
                                            }

                                                if(message.content === "FDp"){
                                                    message.delete()
                                                             message.reply("merci déviter toute forme d'insulte!!!!?")
                                                        }

                                                    if(message.content === "FdP"){
                                                        message.delete()
                                                                 message.reply("merci déviter toute forme d'insulte!!!!?")
                                                            }
                                                        if(message.content === "fDP"){
                                                            message.delete()
                                                                     message.reply("merci déviter toute forme d'insulte!!!!?")
                                                                }            

                                                            if(message.content === "fdp"){
                                                                message.delete()
                                                                         message.reply("merci déviter toute forme d'insulte!!!!?")
                                                                    }
                                                        

                                                                if(message.content === "Fdp"){
                                                                    message.delete()
                                                                           message.reply("merci déviter toute forme d'insulte!!!!?")
                                                                        }

                                                                    if(message.content === "connard"){
                                                                        message.delete()
                                                                               message.reply("merci déviter toute forme d'insulte!!!!?")
                                                                            }
    
                                                                        if(message.content === "Connard"){
                                                                            message.delete()
                                                                                   message.reply("merci déviter toute forme d'insulte!!!!?")
                                                                                }
        
                                                                            if(message.content === "COnnard"){
                                                                                message.delete()
                                                                                       message.reply("merci déviter toute forme d'insulte!!!!?")
                                                                                    }
            
                                                                    
                                                        });

                    client.on('message', function (message) {
                        if (!message.guild) return
                        let args = message.content.trim().split(/ +/g)
                     
                        if (args[0].toLowerCase() === prefix + "clear") {
                            if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
                            let count = args[1]
                            if (!count) return message.channel.send(":x: Indique un nombre de message a suprimer entre 1 et 99:x:")
                            if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
                            if (count < 1 || count > 99) return message.channel.send("Veuillez indiquer un nombre entre 1 et 99")
                            message.channel.bulkDelete(parseInt(count) + 1)
                        }
                     
                        if (args[0].toLowerCase() === prefix + "mute") {
                            if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
                            let member = message.mentions.members.first()
                            if (!member) return message.channel.send("Membre introuvable")
                            if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
                            if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
                            let muterole = message.guild.roles.find(role => role.name === 'Muted')
                            if (muterole) {
                                member.addRole(muterole)
                                message.channel.send(member + ' a été mute :white_check_mark:')
                            }
                            else {
                                message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                                    message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                                        channel.overwritePermissions(role, {
                                            SEND_MESSAGES: false
                                        })
                                    })
                                    member.addRole(role)
                                    message.channel.send(member + ' a été mute :white_check_mark:')
                                })
                            }
                        }
                    })

                    client.on("message", function (message) {
                        if (!message.guild) return
                        let args = message.content.trim().split(/ +/g)
                     
                        //unmute
                        if (args[0].toLowerCase() === prefix + "unmute") {
                            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
                            let member = message.mentions.members.first()
                            if(!member) return message.channel.send("Membre introuvable")
                            if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
                            if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne pas unmute ce membre.")
                            let muterole = message.guild.roles.find(role => role.name === 'Muted')
                            if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
                            message.channel.send(member + ' a été unmute :white_check_mark:')
                        }
                    })              

                    /*Kick*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a bien été exclu :white_check_mark:')
    
    }
})
 
/*Ban*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }
})





                client.on('guildMemberAdd', function (member) {
                    let embed = new Discord.RichEmbed()
                        .setDescription(':tada: **' + member.user.username + '** nous a rejoin amuse toi bien!!! ' + member.guild.name)
                        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
                    member.guild.channels.get('584287396141727785').send(embed)
                    member.addRole('ID DU ROLE A AJOUTER AUTOMATIQUEMENT')
                })
                 
                client.on('guildMemberRemove', function (member) {
                    let embed = new Discord.RichEmbed()
                        .setDescription(':cry: au non **' + member.user.username + '** nous a quitté ' + member.guild.name)
                        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
                    member.guild.channels.get('584287396141727785').send(embed)
                })
                
                client.on('message', message => {
                    let args = message.content.split(" ").slice(1);
                   
                    if(message.content.startsWith(prefix + "say"))  {
                        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
                      if (message.channel.type === "dm") return; 
                           message.delete()
                      message.channel.send(args.join(" "))
                   
                       }
                  
                  
                   
                  });

                  
