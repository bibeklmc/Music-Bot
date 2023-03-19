module.exports = {
  Admins: ["UserID", "UserID"], // Admins of the bot, I don't know what this do. -Darren.
  ExpressServer: true, // If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", // Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sXXQ4yXwDK", // Support Server Link
  Token: process.env.Token || "MTAzMzk4NDczMDAxNTc0ODE3OQ.G56Lkb.SrYWtKlEUemRTtIrKJlHkV0IWL40H4Jw43Wo-s", // Discord Bot Token
  Token: process.env.Token || "MTAyNzk4NzE5MTI5MDQwMDgxOQ.GbXj6x.q36gkyT2MLqQsgPsN81Z-g6ardjwSwQKssQ_u8", // Discord Bot Token
  Token: process.env.Token || "MTAyOTQyNDg4NDU2NjIwNDQ2OA.GSFQG6.adjYfGfpKMkWCmUvofaOzsXPzm2Uq92R8oMiAU", // Discord Bot Token
  Token: process.env.Token || "MTA4NDE0MjExODM5OTkxODE4Mw.GTTlcw.NkrXH0t51HRIc6uLU-biEz39B95un8QYEc5S08", // Discord Bot Token
  Token: process.env.Token || "MTA4NDE0ODY1ODQzOTczMzI4Mw.G80owT.NWIfXwFBmsWKjOM6c0ItTK4jAkFiMrg659VgEk", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1027987191290400819", // Discord Client ID # psofficial
  ClientSecret: process.env.Discord_ClientSecret || "rhN7dMZfswdzwJcy2l0J_6xwpkPKsSwS", // Discord Client Secret # ps official
  ClientID: process.env.Discord_ClientID || "1029424884566204468", // Discord Client ID # sweely 3
  ClientSecret: process.env.Discord_ClientSecret || "7K2nREZ3SSQNJI1Hr44mmVMqs7N6IopE", // Discord Client Secret  ClientID: process.env.Discord_ClientID || "", // Discord Client ID
  ClientID: process.env.Discord_ClientID || "1033984730015748179", // Discord Client ID # psmusic
  ClientSecret: process.env.Discord_ClientSecret || "LkSGPouyIwaNOk4nCpW-fZGc9MMcvW1r", // Discord Client Secret  ClientID: process.env.Discord_ClientID || "", // Discord Client ID
  ClientID: process.env.Discord_ClientID || "1084148658439733283", // Discord Client ID # ps corp
  ClientSecret: process.env.Discord_ClientSecret || "Ly12c7jvW52I8YWuxYd18cZR9bhYtiQs", // Discord Client Secret  ClientID: process.env.Discord_ClientID || "", // Discord Client ID
  ClientID: process.env.Discord_ClientID || "1084142118399918183", // Discord Client ID # vibes cheats
  ClientSecret: process.env.Discord_ClientSecret || "aq6OaKE4fZvI9ZxUYa9g487b6SD3sH7c", // Discord Client Secret  ClientID: process.env.Discord_ClientID || "", // Discord Client ID

  Scopes: ["identify", "guilds", "applications"], // Discord OAuth2 Scopes
  ServerDeafen: true, // If you want bot to stay deafened
  DefaultVolume: 100, // Sets the default volume of the bot, You can change this number anywhere from 1 to 9007199254740991 (JS Integer limit. If you do set it to that, you're a monster.)
  CallbackURL: "/api/callback", // Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, // Make the bot stays in VC 24/7 (when you reboot the bot will **not** automatically rejoin.)
  CookieSecret: "Pikachu is cute", // A cookie for you, cookie for me. make sure you change this value!
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", // URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", // Color of most embeds | Custom Hex value are supported. I.e: "#36393F"
  Permissions: 2205281600, // Bot Inviting Permissions
  Website: process.env.Website || "https://sites.google.com/view/psbibekffclient/home", // Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  // If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  // You need a lavalink server for this bot to work!!!!
  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "lavalink-replit-2.bibekdc.repl.co", //- The host name or IP of the lavalink server.
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "psbibekff", //- The password of the lavalink server.
    secure: true, // Set this to true if the lavalink uses SSL. if not set it to false.
    retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
    retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
  },
  // Spotify Integration, allows you to enter a spotify link.
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "3abf03a9f88e4ac5bcbd811dd2b9bb5f", // Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "c93108d4231042c7aad7f5011d09777f", // Spotify Client Secret
  },
};
