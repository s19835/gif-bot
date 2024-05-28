//Create a client instance for the Discord bot and log in to Discord
import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});
//ensures that the caches for guilds, channels, and roles are populated and available for internal use

/*if (client.isReady) {
    console.log("Logged in as a client");
}*/

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
}); 

client.login(process.env.TOKEN);
