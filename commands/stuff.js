module.exports = {
    name: 'stuff',
    description: "PeepsBot stuff!",
    execute(message, args){
        message.channel.send('test - Invite PeepsBot to your server for testing!');
        message.channel.send('ani - MapleAnimates!');
        message.channel.send('coin - Peeps Coin!');
        message.channel.send('peeps - Join the Peeps server!');
        message.channel.send('source - PeepsBot source code!');
    }
}
