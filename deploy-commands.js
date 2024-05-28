import { REST, Routes } from "discord.js";
import { config } from "dotenv";
import * as commands from "./commands/slash-commands.js";

config();

const command = [];

if ('data' in commands && 'execute' in commands) {
    command.push(commands.data);
    console.log(command);
} else {
    console.log("[WARNING] command not found");
}

//using REST and Routes
//prepare an instance for REST
const rest = new REST().setToken(process.env.TOKEN);
