import { REST, Routes } from "discord.js";
import { config } from "dotenv";
import * as commands from "./commands/slash-commands.js";

config();

const command = [];

if ('data' in commands && 'execute' in commands) {
    command.push(commands.data);
    //console.log(command);
} else {
    console.log("[WARNING] command not found");
}

//using REST and Routes
//prepare an instance for REST
const rest = new REST().setToken(process.env.TOKEN);
//console.log(rest);

//deploy commands
(async () => {
    try {
        console.log(`Started refreshing ${command.length} application commands.`);

        const data = await rest.put(Routes.applicationGuildCommand(process.env.CLIENTID, process.env.SEVERID), {body: command});
        //console.log(data);

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
});

//console.error("This is an error!");