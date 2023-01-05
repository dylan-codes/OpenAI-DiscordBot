# OpenAI-DiscordBot
Fun little boilerplate Discord Bot for your personal use. Utilizes OpenAI's Davinci AI model.



# To create the discord bot you will have to do two things first:

Open AI Setup:
1.) Go to https://openai.com/api/ and get your OpenAI account set up.
2.) Once set up, go to https://beta.openai.com/account/api-keys and create your API key. Place this in your own .env file under the name OPENAI_KEY (ex: OPENAI_KEY=xxxxxxxxxxxxxxxx)
3.) Next, go to https://beta.openai.com/account/org-settings and copy your Organization ID. Place this in your .env file as OPEN_ORG

Discord Setup:
1.) Head to https://discord.com/developers/applications and create a new application.
2.) Once created, go into the Bot window (selected on the left) and add a bot.
3.) Set your Bot's name, then create and copy the token. Place this in your .env file as DISCORD_TOKEN.
4.) Finally, make sure to turn the setting MESSAGE CONTENT INTENT on. This will allow your bot to read server messages.
5.) Next, go to the OAuth2 menu. Find the Authorization Method and set it to Custom URL.
6.) Set the custom URL to: https://discord.com/oauth2/authorize?scope=bot&permissions=8&client_id=YOUR_CLIENT_ID (CLIENT_ID is found under Client Information on the same page)
7.) Copy and paste the custom URL in your search bar. This will open a discord page that will allow you to add the bot to your server.


Finally, type "node ./index.js" in the OpenAI-DiscordBot folder and you will get a message when the bot comes online.



