export const pril5 = (user, code, operator, offer, name, sum, lpiName) => {
  const today = new Date();
  return `
<!DOCTYPE html>
<html lang='ru'>
<head>
  <meta charset="utf-8">
  <title>PDF Result Template</title>
  <style>
      .main {
          width: 460px;
          margin: 0 auto;
          font-size: 12px;
          font-family: Arial;
      }
  </style>
</head>
<body>
<div class="main">
  <table width="100%" style="font-family: Arial;">
    <tr >
      <td style="width: 68%; padding: 20px 0;">
        <div style="text-align: justify; font-size: 11pt;"></div>
      </td>
      <td style="width: 32%; text-align: center; padding: 30px 0;">Оператору инвестиционной платформы ООО «Удмуртская платформа по привлечению инвестиций «Удалтон»</td>
    </tr>
  </table>
  <br/>
  <div style="font-weight: bold; font-size: 16pt; padding-left:5px; font-family: Arial;">
    Заявка инвестора о принятии (акцепта) инвестиционного предложения (оферты) № ${
      offer.number
    }</div>
  <br/>
  <ol>
    <li>Настоящей заявкой (акцептом) принимаю условия инвестиционного предложения.</li>
    <li>Поручаю оператору перечислить денежные средства в размере суммы инвестирования,
      указанных в настоящей заявке, с номинального счета оператора, бенефициаром которых я являюсь.</li>
    <li>В соответствии с требованием п. 1 ст. 7 Федерального закона «О привлечении инвестиций с использованием инвестиционных платформ и о внесении изменений в отдельные законодательные акты Российской Федерации» заверяю оператора в том, что в течение действующего календарного года с учетом инвестирования в этот же период с использованием иных инвестиционных платформ, я соблюдаю указанные ограничения. (Настоящий пункт не заполняется физическим лицом, признанным оператором квалифицированным инвестором).</li>
  </ol>
  <table border="1" width="100%" cellpadding="2" cellspacing="2" style="border-collapse: collapse; width: 100%; font-family: Arial;">
    <tbody >
    <tr>
      <td>Инвестор (ФИО/Наименование)</td>
      <td>${name}</td>
    </tr>
    <tr>
      <td>ИНН Инвестора</td>
      <td>${user.orgInn ? user.orgInn : user.inn}</td>
    </tr>
    <tr>
      <td>Сумма инвестирования</td>
      <td>${sum}</td>
    </tr>
    <tr>
      <td>Лицо, привлекающее инвестиции, (ИНН, наименование)</td>
      <td>${lpiName}</td>
    </tr>
    </tbody>
  </table>

  <br />
  <p>ЗАЯВКА (АКЦЕПТ) ПОДПИСАНА ПРОСТОЙ ЭЛЕКТРОННОЙ ПОДПИСЬЮ (SMS)</p>
  <table border="1" width="100%" cellpadding="2" cellspacing="2" style="border-collapse: collapse; width: 100%; font-family: Arial;">
    <tbody >
    <tr>
      <td>ID лица</td>
      <td>${user.uuid}</td>
    </tr>
    <tr>
      <td>Номер телефона</td>
      <td>${user.phone}</td>
    </tr>
    <tr>
      <td>SMS-код</td>
      <td>${code}</td>
    </tr>
    <tr>
      <td>ДАТА и ВРЕМЯ</td>
      <td>${today.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })}</td>
    </tr>
    <tr>
      <td>Идентификатор сотового оператора</td>
      <td>${operator.operator}, ${operator.region}</td>
    </tr>
    </tbody>
  </table>
</div>


</body>
</html>
    `;
};
