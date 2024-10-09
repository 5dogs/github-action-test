const fetch = require('node-fetch');

function sendLineNotify(message) {
  const token = process.env.LINE_NOTIFY_TOKEN;  // GitHub Secretsからトークンを取得
  const url = 'https://notify-api.line.me/api/notify';
  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ message })
  };

  fetch(url, options)
    .then(response => response.text())
    .then(data => console.log('LINE Notify sent:', data))
    .catch(error => console.error('Error:', error));
}

module.exports = { sendLineNotify };
