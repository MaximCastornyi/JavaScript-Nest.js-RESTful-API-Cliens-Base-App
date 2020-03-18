import { Module } from '@nestjs/common';
import { QuotesController } from './client-base.controller';
import { QuotesService } from './client-base.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteSchema } from './schemas/client-base.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'client-base', schema: QuoteSchema }]),
  ],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
