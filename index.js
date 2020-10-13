const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms')

const prefix = 'p!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('PeepsBot is online!');
    client.user.setActivity('Shrek 2', { type: 'WATCHING'}).catch(console.error);
});

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to The Peeps, ${member}! Please read the rules in the rules channel!`)
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'test') {
        client.commands.get('test').execute(message, args);
    }if (command == 'help') {
        client.commands.get('help').execute(message, args);
    }if (command == 'ani') {
        client.commands.get('ani').execute(message, args);
    }if (command == 'coin') {
        client.commands.get('coin').execute(message, args);
    }if (command == 'moderation') {
        client.commands.get('moderation').execute(message, args);
    }if (command == 'stuff') {
        client.commands.get('stuff').execute(message, args);
    }if (command == 'peeps') {
        client.commands.get('peeps').execute(message, args);
    }if (command == 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args);
    }
});

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('PeepsBot did not approve.').then(() => {
                        message.reply(`Successfully kicked ${user.tag}`)
                    }).catch(err => {
                        message.reply('I was unable to kick the user.');
                        console.log(err);
                    });
                } else {
                    message.reply("No.")
                }
            } else {
                message.reply('You need to enter a member!')
            }
            break;
    }
})

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'ban':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban({reason: 'PeepsBot did not approve.'}).then(() => {
                        message.reply(`Successfully banned ${user.tag}`)
                    }).catch(err => {
                        message.reply('I was unable to ban the user.');
                        console.log(err);
                    });
                } else {
                    message.reply("No.")
                }
            } else {
                message.reply('You need to enter a member!')
            }
            break;
    }
})

client.login('token');
