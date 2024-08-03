let handler = async (m, { conn }) => {

    const vn = './media/قول السؤال تاني.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `قول السؤال تاني.mp3`}, {quoted: m});
};

// دي كلمات المساعدة والأوسمة الخاصة بالأمر
handler.help = ['notification'];
handler.tags = ['notification'];

// دي الكلمات اللي الكود هيتفاعل معاها
handler.customPrefix = /قول السؤال تاني|انت هنا|مش فاهم|مشفاهم/i;
handler.command = new RegExp;

export default handler;