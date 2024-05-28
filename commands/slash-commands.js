import { SlashCommandBuilder } from "discord.js";

//THis will provide user a query to enter a word for gif
export const data = new SlashCommandBuilder().setName("gif").setDescription("initialising the interaction").addStringOption(option => option.setName("query").setDescription("The search query").setRequired(true));

//need to modify this to provide a gif from the query word (data)
export async function execute(interaction) {
	await interaction.reply('Pong!')
}