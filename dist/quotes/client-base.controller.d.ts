import { QuotesService } from './client-base.service';
import { CreateQuoteDto } from './dto/create-client-base.dto';
import { Quote } from './interfaces/client-base.interface';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getQuotes(): Promise<Quote[]>;
    getQuote(id: any): Promise<Quote>;
    createQuote(createQuoteDto: CreateQuoteDto): Promise<Quote>;
    updateQuote(id: any, updateQuoteDto: CreateQuoteDto): Promise<Quote>;
    deleteQuote(id: any): Promise<any>;
}
