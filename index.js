//Create a client instance for the Discord bot and log in to Discord
import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
//importing the slash-commands
import * as commands from "./commands/slash-commands.js"

config();

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});
//ensures that the caches for guilds, channels, and roles are populated and available for internal use

/*if (client.isReady) {
    console.log("Logged in as a client");
}*/

//Loading command files into client
if (commands.data == true && commands.interaction == true) {
    client.commands = commands;
}


client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.username}`);
}); 

client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);
});