module.exports = {
    name: 'moderation',
    description: "Moderation commads!",
    execute(message, args){
        message.channel.send('kick - Kick a user.');
        message.channel.send('ban - Ban a user.');
        message.channel.send('serverinfo - The Peeps server info.');
    }
}
