const { sendLineNotify } = require('./lineNotify');

function cal(yatin = 78000, isRent = true) {
  let base = 0;
  let tuika = 0;
  let yatinTeate = 0;
  
  if (yatin >= 16000 && isRent) {
    if (yatin <= 27000) {
      base = yatin - 16000;
    } else {
      let tmp = (yatin - 27000) / 2;
      if (tmp > 17000) {
        tuika = 11000 + 17000;
      } else {
        tuika = 11000 + tmp;
      }
    }
    yatinTeate = Math.floor((base + tuika) / 100) * 100;
    const message = `住居手当の月額: ${yatinTeate}円`;
    console.log(message);
    sendLineNotify(message);  // LINEに結果を送信
  } else {
    const message = "16000円以下の家賃または賃貸住宅でないので手当対象外です。";
    console.log(message);
    sendLineNotify(message);  // LINEに結果を送信
  }
}

cal();  // デフォルト引数で関数を実行
