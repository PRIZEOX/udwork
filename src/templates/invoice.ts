export const invoice = ({ name, sumString, userName, number, dateString }) => {
  const today = new Date();
  return `
    <!DOCTYPE html>
<html lang='ru'>
<head>
  <meta charset="utf-8">
  <title>PDF Result Template</title>
  <style>
      .main
      {
          width: 460px;
          margin: 0 auto;
          font-size: 10px;
          font-family: Arial;
      }
  </style>
</head>
<body>
<div class="main">
  <table width="100%" style="font-family: Arial;">
    <tr >
      <td style="width: 68%; padding: 20px 0;">
        <div style="text-align: justify; font-size: 11px;">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ УДМУРТСКАЯ ПЛАТФОРМА ПО ПРИВЛЕЧЕНИЮ ИНВЕСТИЦИЙ "УДАЛТОН" ИНН 1832162125 КПП 183201001                                                                                                     426006, Удмуртская Республика, Ижевск г, Проезд им Дерябина, дом № 3, э2нп24л205                                             тел.: +7 (950)834-3250  адрес электронной почты info@udalton.ru</div>
      </td>
      <td style="width: 32%; text-align: center; padding: 30px 0;"><img src="logo.svg" style="width: 70%;"></td>
    </tr>

  </table>


  <table width="100%" border="2" style="border-collapse: collapse; width: 100%; font-family: Arial;" cellpadding="2" cellspacing="2">
    <tr style="">
      <td colspan="2" rowspan="2" style="min-height:13mm; ">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="height: 13mm;">
          <tr>
            <td valign="top">
              <div>АО "ТИНЬКОФФ БАНК" г. Москва</div>
            </td>
          </tr>
          <tr>
            <td valign="bottom" style="height: 3mm;">
              <div style="font-size:10pt;">Банк получателя</div>
            </td>
          </tr>
        </table>
      </td>
      <td style="min-height:7mm;height:auto; ">
        <div>БИK</div>
      </td>
      <td rowspan="2" style="vertical-align: top; ">
        <div style=" height: 7mm; line-height: 7mm; vertical-align: middle;">44525974</div>
        <div>30101810145250000974</div>
      </td>
    </tr>
    <tr>
      <td style="">
        <div>Сч. №</div>
      </td>
    </tr>
    <tr>
      <td style="min-height:6mm; height:auto; ">
        <div>ИНН 1832162125</div>
      </td>
      <td style="min-height:6mm; height:auto; ">
        <div>КПП 183201001</div>
      </td>
      <td rowspan="2" style="min-height:19mm; height:auto; vertical-align: top; ">
        <div>Сч. №</div>
      </td>
      <td rowspan="2" style="min-height:19mm; height:auto; vertical-align: top; ">
        <div>40701810700000007795</div>
      </td>
    </tr>
    <tr>
      <td colspan="2" style="min-height:13mm; height:auto;">

        <table border="0" cellpadding="0" cellspacing="0" style="height: 13mm; ">
          <tr>
            <td valign="top">
              <div>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ УДМУРТСКАЯ ПЛАТФОРМА ПО ПРИВЛЕЧЕНИЮ ИНВЕСТИЦИЙ "УДАЛТОН" </div>
            </td>
          </tr>
          <tr>
            <td valign="bottom" style="height: 3mm;">
              <div style="font-size: 10pt;">Получатель</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>


  <table border="1" cellpadding="0" cellspacing="0" style="height: 13mm; width: 100%">
    <tr>
      <td valign="top">
        <div>${name}</div>
      </td>
    </tr>
    <tr>
      <td valign="bottom" style="height: 3mm;">
        <div style="font-size: 10pt;">Назначение платежа</div>
      </td>
    </tr>
  </table>
  <br/>

  <div style="font-weight: bold; font-size: 15pt; padding-left:5px; font-family: Arial;">
    Счет № ${number} от ${dateString}</div>
  <br/>

  <div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>

  <table width="100%" style="font-family: Arial;">
    <tr>
      <td style="width: 30mm; vertical-align: top;">
        <div style=" padding-left:2px; ">Заказчик:    </div>
      </td>
      <td>
        <div style="font-weight:bold;  padding-left:2px;">
          ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ УДМУРТСКАЯ ПЛАТФОРМА ПО ПРИВЛЕЧЕНИЮ ИНВЕСТИЦИЙ "УДАЛТОН" ИНН 1832162125 КПП 183201001                       426006, Удмуртская Республика, Ижевск г, Проезд им Дерябина, дом № 3, э2нп24л205 </div>
      </td>
    </tr>
    <tr>
      <td style="width: 30mm; vertical-align: top;">
        <div style=" padding-left:2px;">Плательщик:    </div>
      </td>
      <td>
        <div style="font-weight:bold;  padding-left:2px;">
          ${userName}
        </div>
      </td>
    </tr>
  </table>


  <table border="2" width="100%" cellpadding="2" cellspacing="2" style="border-collapse: collapse; width: 100%; font-family: Arial;">
    <thead>
    <tr>
      <th style="width:13mm; ">№</th>

      <th>Наименование услуги</th>
      <th style="width:20mm; ">Кол-во</th>
      <th style="width:17mm; ">Ед.</th>
      <th style="width:27mm;  ">Цена</th>
      <th style="width:27mm;  ">Сумма</th>
    </tr>
    </thead>
    <tbody >
    <tr>
      <td style="width:13mm; ">1</td>

      <td>${name}</td>
      <td style="width:20mm; ">1</td>
      <td style="width:17mm; ">Услуга</td>
      <td style="width:27mm; text-align: center; ">${sumString}</td>
      <td style="width:27mm; text-align: center; ">${sumString}</td>
    </tr>
    </tbody>
  </table>

  <table style="font-family: Arial;" border="0" width="100%" cellpadding="1" cellspacing="1">
    <tr>
      <td></td>
      <td style="width:27mm; font-weight:bold;  text-align:right;">Итого:</td>
      <td style="width:27mm; font-weight:bold;  text-align: center; ">${sumString}</td>
    </tr>
    <tr>
      <td></td>
      <td style="width:27mm; font-weight:bold;  text-align:right;">В т.ч. НДС:</td>
      <td style="width:27mm; font-weight:bold;  text-align: center; ">0,00</td>
    </tr>
    <tr>
      <td></td>
      <td style="width:37mm; font-weight:bold;  text-align:right;">Итого к оплате:</td>
      <td style="width:27mm; font-weight:bold;  text-align: center; ">${sumString}</td>
    </tr>
  </table>

  <br />
  <div style="font-family: Arial;">
    Всего наименований 1 на сумму ${sumString} рублей.</div>
  <br /><br />
  <div style="background-color:#000000; width:100%; font-size:1px; height:2px;">&nbsp;</div>
  <br/>
<!--  <div style="font-family: Arial; font-size: 10pt;">-->
<!--    1. Счет действителен в течении 5 (пяти) банковских дней, не считая дня выписки счета. В случае нарушения срока оплаты сохранение цены на товар и наличие товара на складе НЕ ГАРАНТИРУЕТСЯ.<br />-->
<!--    2. Оплата данного счета означает согласие с условиями изложенными в п.1</div>-->
  <br /><br />
  <!--<div style="background: url('&lt;!&ndash;url печати в png сюда&ndash;&gt;');  background-repeat: no-repeat; padding: 30px 10px; width: 400px; height: 250px;">-->
  <div>Руководитель ______________________ (Раджабов Б.Ф.)</div>
  <br/>  <br /><br />

  <div>Главный бухгалтер ______________________ (Дериглазова Е.М.)</div>
  <br/>

<!--  <div style="width: 85mm;text-align:center;">М.П.</div>-->
  <br/>
</div>
<br/>  <br /><br /><br/>  <br /><br /><br/>  <br /><br />
</div>


</body>
</html>
    `;
};
