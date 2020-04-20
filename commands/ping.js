const Discord = require("discord.js")

module.exports = {
	name: "ping",
	description: "Look at bot response times.",
	usage: "",
	category: "self",

	async code(client, message) {
		const m = await message.channel.send("Pong...?")
		const pingEmbed = new Discord.MessageEmbed()
		.setColor("72da7e")
		.setDescription(`💗 Websocket: \`${client.ws.ping}ms\`
		📬 Message: \`${m.createdAt.getTime() - message.createdAt.getTime() - message.createdAt.getTime()}ms\``)
		await m.edit("🏓 Pong!", pingEmbed)
	}
}