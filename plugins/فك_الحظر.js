let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*ابسط ي عم البانشات اتفك ليكم اهو قولو شكرا بقا لعمو العقرب 😂♥*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^رفع-بانشات|unbanchat|فك-الحظر$/i
handler.rowner = true
export default handler
