/* eslint-disable prettier/prettier */
export const pril1 = ({
  id,
  number,
  from,
  borrowerName,
  dateGosReg,
  OGRN,
  INN,
  registerAdres,
  actualAdres,
  minLoanSum,
  maxLoanSum,
  validatyPeriod,
  percent,
  garContribution,
  loanPeriod,
  borrowerRequisites,
  purposeOfLoan,
  info,
  riskWarning,
  borrowerResponsibilities,
  monitoringExpInfo,
  otherConditions,
}) => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <title></title>
        <style>
            .main
            {
                width: 440px;
                margin: 0 auto;
            }
        </style>
        
    </head>
    <body class = "main" lang="ru-RU" link="#000080" vlink="#800000" dir="ltr"><h1 class="western" align="center" style="margin-left: 0.2in; text-indent: 0.39in"><a name="_GoBack"></a>
    <font face="Times New Roman, serif">ИНВЕСТИЦИОННОЕ</font><font face="Times New Roman, serif"><span style="letter-spacing: -0.2pt">
    </span></font><font face="Times New Roman, serif">ПРЕДЛОЖЕНИЕ</font><font face="Times New Roman, serif"><span style="letter-spacing: -0.2pt">
    </span></font><font face="Times New Roman, serif">№ ${number}</font><font face="Times New Roman, serif"><u>
        </u></font><font face="Times New Roman, serif">от ${from}</font><font face="Times New Roman, serif"><u><span style="font-weight: normal">
         </span></u></font>
    </h1>
    <h1 class="western" align="center" style="margin-left: 0.2in; text-indent: 0.39in">
    <font face="Times New Roman, serif"><span style="font-weight: normal">Индивидуальные
    условия </span></font>
    </h1>
    <h1 class="western" align="center" style="font-weight: normal; margin-left: 0.2in; text-indent: 0.39in">
    <br/>
    
    </h1>
    <ol>
        <li><h1 class="western"><font face="Times New Roman, serif"><span style="font-weight: normal">Форма
        инвестиционного предложения</span></font></h1>
    </ol>
    <p class="western" align="left" style="margin-left: 0.2in; text-indent: 0.39in">
    <br/>
    
    </p>
    <dl>
        <dd>
        <table width="639" cellpadding="1" cellspacing="0">
            <col width="41"/>
    
            <col width="272"/>
    
            <col width="318"/>
    
            <tr>
                <td width="41" height="40" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">п/п</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Условие</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Содержание
                    условия</font></font></font></p>
                </td>
            </tr>
            <tr>
                <td width="41" height="109" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.1</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Лицо,
                    привлекающее инвестиции (Заемщик)
                    Полное наименование юридического
                    лица, либо Фамилия Имя Отчество
                    индивидуального предпринимателя</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${borrowerName}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="40" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.2.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Дата
                    государственной регистрации</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${dateGosReg}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="40" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.3.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ОГРН
                    или ОГРНИП</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${OGRN}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="40" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.4.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ИНН
                    или ОГРНИП</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${INN}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="48" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.5.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Адрес
                    регистрации (в соответствии со
                    сведениями в ЕГРЮЛ/ЕГРИП)</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${registerAdres}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="32" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.6.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Адрес
                    фактический</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${actualAdres}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="34" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.7.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Способ
                    инвестирования</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Предоставление
                    займа</font></font></font></p>
                </td>
            </tr>
            <tr>
                <td width="41" height="40" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.8.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Минимальная
                    сумма займа, рублей</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${minLoanSum}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="41" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.9.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Максимальная
                    сумма займа, рублей</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${maxLoanSum}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="50" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.10.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Срок
                    действия </font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестиционного</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">
                    предложения (дата и время)</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${validatyPeriod}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="76" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.11.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Процентная
                    ставка</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">,
                    % (фиксированный % от суммы займа)</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${percent}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="30" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.12.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Гарантийный
                    взнос, руб.</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${garContribution}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="29" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.13.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Срок
                    займа</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${loanPeriod}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="61" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.14.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Реквизиты
                    Заемщика для перечисления займа</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${borrowerRequisites}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="61" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.15.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Цели
                    использования суммы займа (если займ
                    является целевым)</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${purposeOfLoan}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="121" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.16.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Информация,
                    позволяющая составить общее
                    представление о целях привлечения
                    инвестиций и об обстоятельствах,
                    которые могут оказать влияние на
                    достижение указанных целей</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${info}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="101" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.17.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Предупреждение
                    о рисках, связанных с лицом, привлекающим
                    инвестиции, и рисках, связанных с
                    принятием инвестиционного предложения</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${riskWarning}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="91" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.18.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Обязанность
                    Заемщика по предоставлению обеспечения
                    исполнения обязательств по договору
                    Займа.</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${borrowerResponsibilities}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="61" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.19.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Приобретение
                    имущественных прав контролирующим
                    Заемщика лицом</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Контролирующее
                    лицо не принимает на себя обязательств
                    приобретения имущественных прав у
                    Инвесторов.</span></font></font></font></p>
                </td>
            </tr>
            <tr>
                <td width="41" height="102" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.20.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Сведения
                    об экспертах, привлеченных для
                    мониторинга и оценки деятельности
                    Лица, привлекающего инвестиции (при
                    наличии)</span></font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${monitoringExpInfo}
                    </p>
                </td>
            </tr>
            <tr>
                <td width="41" height="44" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">1.21.</font></font></font></p>
                </td>
                <td width="272" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.1in; text-indent: 0in">
                    <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Прочие
                    условия Инвестиционного предложения</font></font></font></p>
                </td>
                <td width="318" style="border: 1px solid #000000; padding: 0in 0in"><p lang="en-US" align="center" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                    <br/>
                        ${otherConditions}
                    </p>
                </td>
            </tr>
        </table>
    </dl>
    <p class="western" style="margin-left: 0.2in; text-indent: 0.39in"><br/>
    
    </p>
    <ol start="2">
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Настоящим,
        Лицо привлекающие инвестиции (Заемщик):</font></font></font></p>
    </ol>
    <ol start="2">
        <ol>
            <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Подтверждает,
            что он в полном объеме ознакомлен и
            согласен с общими условиями Договора
            инвестирования (займа) и присоединился
            к Правилам платформы, в редакции,
            действующей на момент заключения
            Договора займа, и обязуется их соблюдать;</font></font></font></p>
            <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Подтверждает,
            что вся указанная выше информация и
            документы являются достоверными,
            актуальными, полными, а также, что Лицо,
            привлекающие инвестиции, при
            предоставлении указанной выше информации
            и документов действует разумно и
            добросовестно. В случае нарушения
            указанного требования Оператор не
            несет ответственности за действия
            Лица, привлекающего инвестиции.</font></font></font></p>
            <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Выражает
            свое безусловное согласие Инвесторам
            и Оператору Инвестиционной платформы
            «КЛИК ИНВЕСТ» на предоставление
            информации, связанной с предоставлением
            Инвестором Займа и исполнением
            обязанностей по возврату Займа, в бюро
            кредитных историй в соответствии с
            порядком и правилами, предусмотренными
            Федеральным законом от 30 декабря 2004
            года № 218-ФЗ «О кредитных историях», а
            равно на</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">получение</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">данных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">информации</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">о</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Заемщике</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">его</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">обязательствах</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">из</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">бюро</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">кредитных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">историй</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в
            соответствии с порядком и правилами
            вышеуказанного закона.</font></font></font></p>
            <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Дает</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Оператору</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Платформы</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 1.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">«КЛИК
            ИНВЕСТ»,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">осуществляющему</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">обработку</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">персональных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">данных,
             </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">свое
            согласие на автоматизированную и
            неавтоматизированную обработку своих
            персональных данных (сбор, систематизацию,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">накопление,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">хранение,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">уточнение,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">использование,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">распространение,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">передачу,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">обезличивание,
            блокирование, уничтожение), указанных
            в настоящей Оферте, и в иных документах,
            предоставленных Оператору платформы,
            осуществляемую в целях: оказания
            информационно-консультационных услуг,
            подготовки и заключения договоров с
            Инвестором(ами), и обязательств из них
            вытекающих; проверки достоверности
            своих персональных данных, рассылки
            сообщений, формирования истории
            взаимодействия с руководителем
            Заемщика, продвижения и реализации
            услуг Инвестиционной платформы</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 2.0pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">«КЛИК
            ИНВЕСТ» и её партнеров,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">а</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">также</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">иных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">действий,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">предусмотренных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Федеральным</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">законом</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">от</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.6pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">27</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">июля</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.6pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">2007</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">года</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.6pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">№</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">152-ФЗ</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">«О
            персональных данных».</font></font></font></p>
            <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Дает</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">свое</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">согласие</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ООО</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 1.8pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">«КЛИК
            ИНВЕСТ»,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">случае</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">уступки</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">права</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">требования</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">по</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Договору</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">займа
            третьим лицам, о раскрытии его
            персональных данных указанным лицам.</font></font></font></p>
        </ol>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Срок</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">действия</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">согласий</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">по</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">пунктам</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">2.3.</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">-</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">2.5.</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">соответствует</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">сроку</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">действия</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Договора</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">займа.</span></font></font></font></p>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Заемщик</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 2.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">подтверждает,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">что</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ознакомлен</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">с</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">положениями</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Федерального</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">закона</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">от</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 0.1pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">27</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">июля</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">2007
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">года</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">№</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">152-ФЗ</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">«О</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">персональных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">данных»,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">права</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">обязанности</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">области</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">обработки</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">его</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">персональных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">данных
        и их защиты ему понятны.</font></font></font></p>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Заемщик
        уведомлен и согласен, что настоящая
        Оферта может быть использована в
        качестве доказательства</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">при</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">возникновении</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">возможных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">спорных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ситуаций,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">том</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">числе,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">влекущих</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ответственность
        Заемщика за представление заведомо
        ложной информации.</font></font></font></p>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Заемщик</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">заверяет</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестора</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">том,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">что:</span></font></font></font></p>
        <ol>
            <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Он</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">не</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">имеет</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">просроченных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">денежных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">обязательств,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">неуплаченных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">штрафов,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">просроченной
            задолженности по налогам, сборам и
            иным обязательным платежам в бюджеты
            всех уровней и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 2.0pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">(или)
            в государственные внебюджетные фонды;</font></font></font></p>
            <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Предпринимательская</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">деятельность</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Заемщика</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">не</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">приостановлена</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">отсутствуют</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">основания</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
            </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">для
            ее приостановления;</font></font></font></p>
        </ol>
    </ol>
    <p class="western" align="left" style="margin-left: 0in; text-indent: 0in">
    <br/>
    
    </p>
    </body>
    </html>`;
};
