module.exports = {
    name: 'test',
    description: "Invite PeepsBot to tst on your server!",
    execute(message, args){
        message.channel.send('Here you go! https://discord.com/oauth2/authorize?client_id=755551553418428436&scope=bot&permissions=8');
    }
}