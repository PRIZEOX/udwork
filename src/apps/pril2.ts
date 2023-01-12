/* eslint-disable prettier/prettier */
export const pril2 = ({
    id,
    invName,
    invPosition,
    invNameOfRuk,
    invOGRN,
    invINN,
    sumOfInvest,
    percent,
    borrowerName,
    borrowerPosition,
    borrowerNameOfRuk,
    borrowerOGRN,
    borrowerINN,
}) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <style>
            .main
            {
                width: 440px;
                margin: 0 auto;
            }
        </style>
    </head>
    <body class = "main" lang="ru-RU" link="#000080" vlink="#800000" dir="ltr"><p align="justify" style="margin-left: 0.2in; text-indent: 0.39in">
    <font size="4" style="font-size: 14pt"><b><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Заявление</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">Инвестора
    о принятии </span></font></font></b></font>
    </p>
    <p align="justify" style="margin-left: 0.2in; text-indent: 0.39in"><font size="4" style="font-size: 14pt"><b><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">Инвестиционного
    предложения (</span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">акцепт</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестора</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">)</span></font></font></b></font></p>
    <p align="justify" style="margin-left: 0.2in; text-indent: 0.39in"><br/>
    
    </p>
    <ol>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">Инвестор:</span></font></font></font></p>
    </ol>
    <p style="margin-left: 0.2in; text-indent: 0in"><br/>
    
    </p>
    <table width="643" cellpadding="1" cellspacing="0">
        <col width="309"/>
    
        <col width="309"/>
    
        <tr>
            <td width="309" height="65" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Полное
                наименование юридического лица, либо
                Фамилия Имя Отчество индивидуального
                предпринимателя</span></font></font></font></p>
            </td>
            <td width="328" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${invName}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="22" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Должность</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.6pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Руководителя</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">юридического</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">лица</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${invPosition}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="23" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ФИО</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">руководителя</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">юридического</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">лица</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${invNameOfRuk}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="18" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">ОГРН/</span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">
                ОГРНИП</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${invOGRN}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="18" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">ИНН/КПП</span></font></font></font></p>
            </td>
            <td width="309" style="border-top: 1.00pt solid #000000; border-bottom: 1px solid #000000; border-left: 1.00pt solid #000000; border-right: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${invINN}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="18" style="border-top: 1.00pt solid #000000; border-bottom: 1.00pt solid #000000; border-left: 1.00pt solid #000000; border-right: 1px solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Сумма</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">инвестирования,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">руб.</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1px solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0in">
                <br/>
                    ${sumOfInvest}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="17" style="border-top: 1.00pt solid #000000; border-bottom: 1.00pt solid #000000; border-left: 1.00pt solid #000000; border-right: 1px solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Процентная</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ставка</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">,
                % (фиксированный % от суммы займа)</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1px solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${percent}
                </p>
            </td>
        </tr>
    </table>
    <p class="western" style="margin-left: 0.2in; text-indent: 0.39in"><br/>
    
    </p>
    <ol start="2">
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Настоящим,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">соответствии</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">со</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 4.0pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ст.</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 1.7pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">438</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ГК</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">РФ,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестор</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">сообщает</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">о</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">полном</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">безоговорочном
        Акцепте Инвестиционного предложения
        Заемщика (Индивидуальные условия):</font></font></font></p>
    </ol>
    <p class="western" style="margin-left: 0.2in; text-indent: 0.39in"><br/>
    
    </p>
    <table width="643" cellpadding="1" cellspacing="0">
        <col width="309"/>
    
        <col width="309"/>
    
        <tr>
            <td width="309" height="65" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="ru-RU">Полное
                наименование юридического лица, либо
                Фамилия Имя Отчество индивидуального
                предпринимателя</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${borrowerName}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="22" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Должность</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.6pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Руководителя</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">юридического</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">лица</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${borrowerPosition}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="23" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">ФИО</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">руководителя</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.5pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">юридического</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
                </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">лица</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${borrowerNameOfRuk}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="18" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">ОГРН/</span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">
                ОГРНИП</span></font></font></font></p>
            </td>
            <td width="309" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${borrowerOGRN}
                </p>
            </td>
        </tr>
        <tr>
            <td width="309" height="17" style="border: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.1in; margin-right: 0.09in; text-indent: 0in">
                <font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">ИНН/КПП</span></font></font></font></p>
            </td>
            <td width="309" style="border-top: 1.00pt solid #000000; border-bottom: 1px solid #000000; border-left: 1.00pt solid #000000; border-right: 1.00pt solid #000000; padding: 0in 0.01in"><p lang="en-US" align="left" style="orphans: 0; widows: 0; margin-left: 0.2in; text-indent: 0.39in">
                <br/>
                    ${borrowerINN}
                </p>
            </td>
        </tr>
    </table>
    <p class="western" style="margin-left: 0.2in; text-indent: 0.39in"><br/>
    
    </p>
    <p class="western" style="margin-left: 0.2in; text-indent: 0.39in"><a name="_Hlk115459597"></a>
    <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и
    подтверждает свое согласие с Общими
    условиями Договора займа и принятие
    Индивидуальных условий Договора займа,
    изложенных в Инвестиционном предложении</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: 2.0pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">№
    </font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><u>	</u></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">
    от </font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><u>	</u></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.7pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">При</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">достижении</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">необходимого</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">объема</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">инвестиций</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">соответствии</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">с</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестиционным</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">предложением
    Заемщика, Оператор Платформы перечисляет
    денежные средства Инвестора, находящиеся
    на Номинальном счете</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">предназначенные</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">для</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">инвестирования</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">соответствии</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">с</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">принятым</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестиционным</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">предложением,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">на
    банковский счет Заемщика не позднее
    трех рабочих дней со дня прекращения
    действия Инвестиционного предложения.
    Подтверждением заключения</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Договора</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">займа</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
    является </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Выписка
    из реестра договоров Оператора Платформы.</font></font></p>
    <ol start="3">
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Договор</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">займа</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">считается</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">заключенным</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">с</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">момента</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">поступления</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">денежных</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">средств</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестора</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">с
        Номинального счета на банковский счет
        Заемщика.</font></font></font></p>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестору</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">известны</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">понятны</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">все</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">условия</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">положения</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Договора</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">займа</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">приложений</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">к</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">нему.</span></font></font></font></p>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестор</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">осознает</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">принимает</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">все</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">риски,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">связанные</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">с</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">заключением</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Договора</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.1pt">займа.</span></font></font></font></p>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестору</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">известны</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">последствия</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">нарушения</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">принятых</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">на</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">себя</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">обязательств,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.4pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">предусмотренных
        Договором займа.</font></font></font></p>
        <li><p style="text-indent: 0in"><font size="2" style="font-size: 11pt"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Инвестор
        подтверждает, что он в полном объеме
        ознакомился с Правилами пользования
        инвестиционной</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">платформой
        «КЛИК ИНВЕСТ»,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">в</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">редакции,</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">действующей</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">на</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">момент</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">заключения</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Договора</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.2pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">займа</font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span style="letter-spacing: -0.3pt">
        </span></font></font><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">и,
        подписывает настоящее Заявление
        Инвестора.</font></font></font></p>
    </ol>
    <p class="western" align="left" style="margin-left: 0in; text-indent: 0in"><a name="_GoBack"></a>
    <br/>
    </p>
    </body>
    </html>
        `;
};
