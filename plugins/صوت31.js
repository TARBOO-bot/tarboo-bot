let handler = async (m, { conn }) => {

    const vn = './media/دا وقتو.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `دا وقتو.mp3`}, {quoted: m});
};

handler.help = ['notification'];
handler.tags = ['notification'];

// الكلمات التي سيتم التفاعل معها
handler.customPrefix = /^(دا وقتو|مش وقتو|مش وقتك)$/i;
handler.command = new RegExp;

export default handler;