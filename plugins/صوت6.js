let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/هموت.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `هموت.mp3`}, {quoted: m});
};

// دي كلمات المساعدة والأوسمة الخاصة بالأمر
handler.help = ['😂']
handler.tags = ['notification']

// دي الكلمات اللي الكود هيتفاعل معاها
handler.customPrefix = /كسم الضحك|هموت|همووت|هموووت|😂|😂😂|😂😂😂|ايه الهزار ده|ضحكني|مش قادر|قهقه|هاهاها/i;
handler.command = new RegExp;

export default handler