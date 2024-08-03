let handler = async (m, { conn }) => {

    const vn = './media/اول مره قابلتك.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `اول مره قابلتك.mp3`}, {quoted: m});
};

// دي كلمات المساعدة والأوسمة الخاصة بالأمر
handler.help = ['notification'];
handler.tags = ['notification'];

// دي الكلمات اللي الكود هيتفاعل معاها
handler.customPrefix = /اول مره قابلتك|اول ما قابلتك|لما قابلتك|يوم ما قابلتك/i;
handler.command = new RegExp;

export default handler;