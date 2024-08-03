let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/رقم فيك.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `رقم فيك.mp3`}, {quoted: m});
};

// دي كلمات المساعدة والأوسمة الخاصة بالأمر
handler.help = ['رقم فيك']
handler.tags = ['notification']

// دي الكلمات اللي الكود هيتفاعل معاها
handler.customPrefix = /رقم فيك|رقم غريب/i;
handler.command = new RegExp;

export default handler