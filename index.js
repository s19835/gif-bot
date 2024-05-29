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
if ('data' in commands && 'execute' in commands) {
    client.commands = commands;
} else {
    console.log("[WARNING] missing values in commands");
}


client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.username}`);
}); 

client.login(process.env.TOKEN);


//set of process need to happen when client is in online and in interaction with the user
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return; //differ from usual message and slash-commands
	
    //check the user triggered command in the commands data, if there is a vlaue save it to command var
    //const command = interaction.client.commands.get(interaction.commandName);

    //if there is no matching commands found then vlaue of command is not exists
    //if(!command) {
   //     console.log("No matching commands found!");
    //    return;
   // }

    if(interaction.commandName !== 'giphy') {
        return;
    }

    try {
        await commands.execute(interaction); // initial error I added command instead of commands
    } catch (error) {
        console.error(error);
    }
});