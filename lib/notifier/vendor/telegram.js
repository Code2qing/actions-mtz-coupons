const { doPost } = require('../util')

async function sendServerChan({ title = '', content = '', botToken, user }) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`
  const data = {
    chat_id: user,
    text: `【${title}】\n${content}`
  }

  return doPost(url, data)
    .then((res) => ({ success: true, msg: 'Telegram 推送成功' }))
    .catch((e) => ({ success: false, msg: `Telegram 推送失败: ${e}` }))
}

module.exports = sendServerChan
