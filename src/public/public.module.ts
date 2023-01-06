import { forwardRef, Module } from '@nestjs/common';
import {
  AboutController,
  DocumentsController,
  FAQController,
  InvestorController,
  UsController,
  LenderController,
  LetterController,
  TempController,
} from './public.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [
    InvestorController,
    LenderController,
    AboutController,
    DocumentsController,
    TempController,
    FAQController,
    LetterController,
    UsController,
  ],
  exports: [],
})
export class PublicModule {}
