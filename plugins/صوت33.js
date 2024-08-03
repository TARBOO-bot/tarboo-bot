let handler = async (m, { conn }) => {

    const vn = './media/بضان.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `بضان.mp3`}, {quoted: m});
};

handler.help = ['notification'];
handler.tags = ['notification'];

// الكلمات التي سيتم التفاعل معها
handler.customPrefix = /^(بضان|اية البضان دا|بطل بضان|يبضاني)$/i;
handler.command = new RegExp;

export default handler;