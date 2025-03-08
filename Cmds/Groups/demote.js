const middleware = require('../../utility/botUtil/middleware');

module.exports = async (context) => {
    await middleware(context, async () => {
        const { client, m } = context;

        if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
            return m.reply("You did not give me a user !?");
        }
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
        const parts = users.split('@')[0];

if (users == "2349137619864@s.whatsapp.net") return m.reply("It's Owner Number! 🦄");

                 await client.groupParticipantsUpdate(m.chat, [users], 'demote'); 

        m.reply(`${parts} is no longer an admin. 🎗️`); 

})

}