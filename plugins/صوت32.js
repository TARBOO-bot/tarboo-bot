let handler = async (m, { conn }) => {

    const vn = './media/محن.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `محن.mp3`}, {quoted: m});
};

handler.help = ['notification'];
handler.tags = ['notification'];

// الكلمات التي سيتم التفاعل معها
handler.customPrefix = /^(محن|اية المحن دا|بطل محن|ممحون)$/i;
handler.command = new RegExp;

export default handler;