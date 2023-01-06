import { Get, Controller, Render, Request, Res, Body, Query, Post } from '@nestjs/common';

@Controller()
export class AboutController {
  @Get(['/', '/about'])
  @Render('about')
  root(@Request() req, @Res() res) {
    if (req.headers['user-agent']?.indexOf('MSIE') >= 0) {
      res.render('msie');
    }
    return { about: 'text-primary' };
  }
}
@Controller()
export class InvestorController {
  @Get('/investor')
  @Render('investor')
  root(@Request() req, @Res() res) {
    if (req.headers['user-agent']?.indexOf('MSIE') >= 0) {
      res.render('msie');
    }
    return { investor: 'text-primary' };
  }
}
@Controller()
export class DocumentsController {
  @Get('/docs')
  @Render('documents')
  root(@Request() req, @Res() res) {
    if (req.headers['user-agent']?.indexOf('MSIE') >= 0) {
      res.render('msie');
    }
    return { docs: 'text-primary' };
  }
}
@Controller()
export class LenderController {
  @Get('/lender')
  @Render('lender')
  root(@Request() req, @Res() res) {
    if (req.headers['user-agent']?.indexOf('MSIE') >= 0) {
      res.render('msie');
    }
    return { lender: 'text-primary' };
  }
}
@Controller()
export class FAQController {
  @Get('/faq')
  @Render('faq')
  root(@Request() req, @Res() res) {
    if (req.headers['user-agent']?.indexOf('MSIE') >= 0) {
      res.render('msie');
    }
    return { faq: 'text-primary' };
  }
}
@Controller()
export class TempController {
  @Get('/msie')
  @Render('msie')
  root() {
    return {};
  }
}
@Controller()
export class LetterController {
  @Get('/letter')
  @Render('letter')
  root() {
    return {};
  }
}
@Controller()
export class UsController {
  @Get('/us')
  @Render('us')
  root() {
    return { us: 'text-primary' };
  }
}
