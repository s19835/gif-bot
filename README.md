# GIF-Bot
Practice Project for Self-learning, a discord bot that provide gif from the query

## Documentation for the Project
site: https://marianiranjan.notion.site/GIF-Discord-Bot-7f952b82e897494389704f093ed4bcba?pvs=4

# GIF Discord Bot

Status: Completed
Themes: Practice Coding

May 27, 2024 Prepare the Essentials 

- Initialising the Git repository.
    
    - May 28, 2024 from new node version use the following command instead of installing dotenv then importing it.
        
        ```bash
        # when running the .js file throw node
        node --env-file .env index.js
        ```
        
    - Or if it’s a simple data or small amount then use with node as shown below,
        
        ```bash
        A=123 B=456 DISCORD_TOKEN=your-token-goes-here node index.js
        ```
        
- Installation and Preparations
    
    Bot created via developer portal and added to the server, CLIENTID, SEVERID & TOKEN were added to .env file.
    

May 28, 2024 Create a client instance for your Discord bot and log in to Discord

- Slash-commands added base level need to modify
- deploy-commands file added not finished with the code

May 29, 2024  Interaction command function update

- Create GIPHY API
    
    [https://developers.giphy.com/dashboard/](https://developers.giphy.com/dashboard/)
    
- Have some struggle with the url fetching
    
    I tried to straightly add the url as a response thinking it will automatically get the media but, we first need to use node-fetch module to fetch the data from the url from web through http request, then change the format to json. Even after we need to specify the straight link for the media.
    
    ## Direct Image URLs vs. Embed URLs
    
    - Direct Image URLs (json.data[0].images.original.url):
        
        These URLs directly point to the image file (in this case, a GIF).
        When sent in a Discord message, Discord fetches the image and displays it inline as an embedded image.
        Example: [https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)
        
    - Embed URLs (json.data[0].embed_url):
        
        These URLs point to a Giphy page that contains the GIF and other metadata.
        Discord treats these as standard URLs and does not always auto-embed them as images.
        Example: [https://giphy.com/embed/3oEjI6SIIHBdRxXI40](https://giphy.com/embed/3oEjI6SIIHBdRxXI40)
