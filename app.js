const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            details: "Categoria: Stepsister",
            state: "Video: Stepsis got stuck and I finally fucked her tight ass and wet pussy",
            startTimestamp: new Date(),
            largeImageKey: "xvideos",
            largeImageText: "xvideos.com"
        }).catch(err => console.log(err));

        console.log("xVideos.com is start");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error);
})();

// ANY QUESTIONS CONTACT By Discord ! NNiko#6078 //
