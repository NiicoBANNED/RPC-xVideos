const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            details: "Categoria: Tia y Sobrino",
            state: "Video: Tia calentona coquetea con su sobrino y cogen delatante de su marido",
            startTimestamp: new Date(),
            largeImageKey: "xvideos",
            largeImageText: "xvideos.com"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error);
})();