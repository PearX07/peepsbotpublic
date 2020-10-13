module.exports = {
    name: 'help',
    description: "PeepsBot commands!",
    execute(message, args){
        message.channel.send('stuff - PeepsBot Commands!');
        message.channel.send('moderation - Moderation Commands (for moderators only, if a member uses these commands, they will be banned)!');
    }
}