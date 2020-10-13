module.exports = {
    name: 'serverinfo',
    description: "Peeps server info!",
    execute(message, args){
        message.channel.send('this server was made in 2019');
    }
}
