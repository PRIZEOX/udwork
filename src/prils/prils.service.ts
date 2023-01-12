/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as htmlpdf from 'html-pdf';
import { test } from 'src/apps/test';
import { pril2 } from 'src/apps/pril2';
import { pril1 } from 'src/apps/pril1';

@Injectable()
export class PrilsService {
    createPrill1({
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
    }){
      const pdfPath = `static/generated/invoice-${id}.pdf`;
      const pdf = `/generated/invoice-${id}.pdf`;
      const prilOps = {
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
      }
      return new Promise((resolve, reject) => {
        htmlpdf
          .create(pril1(prilOps), {
            format: 'A4', // allowed units: A3, A4, A5, Legal, Letter, Tabloid
            orientation: 'portrait',
            childProcessOptions: {
              env: {
                OPENSSL_CONF: '/dev/null',
              },
            },
          })
          .toFile(pdfPath, async (err) => {
            if (err) {
              console.log(err);
            }
            resolve('pril1 generated!');
          });
      });
    }
    createPrill2({id,invName,
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
      borrowerINN,}){
        const pdfPath = `static/generated/invoice-${id}.pdf`;
        const pdf = `/generated/invoice-${id}.pdf`;
        const prilOps = {
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
        }
        return new Promise((resolve, reject) => {
            htmlpdf
              .create(pril2(prilOps), {
                format: 'A4', // allowed units: A3, A4, A5, Legal, Letter, Tabloid
                orientation: 'portrait',
                childProcessOptions: {
                  env: {
                    OPENSSL_CONF: '/dev/null',
                  },
                },
              })
              .toFile(pdfPath, async (err) => {
                if (err) {
                  console.log(err);
                }
                resolve('pril2 generated!');
              });
          });
    }
    createTest(id){
      const pdfPath = `static/generated/invoice-${id}.pdf`;
      const pdf = `/generated/invoice-${id}.pdf`;
      
      return new Promise((resolve, reject) => {

        htmlpdf
          .create(test(id), {
            format: 'A4', 
            orientation: 'portrait',
            childProcessOptions: {
              env: {
                OPENSSL_CONF: '/dev/null',
              },
            },
          })
          .toFile(pdfPath, async (err) => {
            if (err) {
              console.log(err);
            }
            resolve('ok');
          });
      });
    }
    
}


