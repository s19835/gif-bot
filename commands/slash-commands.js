import { SlashCommandBuilder } from "discord.js";
import { config } from "dotenv";
import fetch from "node-fetch";
config();

//THis will provide user a query to enter a word for gif
export const data = new SlashCommandBuilder().setName("giphy").setDescription("initialising the interaction").addStringOption(option => option.setName("query").setDescription("The search query").setRequired(true));


// using giphy api to get a gif from the input word from query
//console.log(data.options.values);


//need to modify this to provide a gif from the query word (data)
export async function execute(interaction) {
    const word = interaction.options.getString('query');
    //await interaction.reply("pong "+ word);
    const gifurl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API}&q=${word}&limit=1&rating=g`;
    const response = await fetch(gifurl);
    const json = await response.json();
    await interaction.reply(json.data[0].images.original.url);
}

//const word = 'dog';
//const gifurl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API}&q=${word}&limit=1&rating=g`;
//const response = await fetch(gifurl);
//const json = await response.json();
//console.log(json.data[0].images.original.url);

/*Direct Image URLs vs. Embed URLs
Direct Image URLs (json.data[0].images.original.url):

These URLs directly point to the image file (in this case, a GIF).
When sent in a Discord message, Discord fetches the image and displays it inline as an embedded image.


Embed URLs (json.data[0].embed_url):

These URLs point to a Giphy page that contains the GIF and other metadata.
Discord treats these as standard URLs and does not always auto-embed them as images.*/