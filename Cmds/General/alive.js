//alive.js

module.exports = async (context) => {
    const { client, m, prefix } = context;

const botname = process.env.BOTNAME || "NOVA MD";

 await client.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/tpzz0D1Y/nova.jpg' }, caption: `Hello ${m.pushName}, Novais active now.\n\nType ${prefix}menu to see my command list..\n\nSome important links concerning the bot are given below.\n\nOfficial website:\n https://chat.whatsapp.com/GS6oBbA80sc9HO7Tq4SDyJ\n\nPairing site:\n https://chat.whatsapp.com/GS6oBbA80sc9HO7Tq4SDyJ\n\nRandom APIs site:\nhttps://chat.whatsapp.com/GS6oBbA80sc9HO7Tq4SDyJ\n\nThis free random APIs are meant for other developers and may not always work.\n\nXd );`, fileLength: "9999999999898989899999999" }, { quoted: m }); 

}