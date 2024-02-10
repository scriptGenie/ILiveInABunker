module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`CLIENT READY - ${client.user.tag} is now online -`)
    }
}