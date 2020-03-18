import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getQuotes(): Promise<Quote[]>;
    getQuote(id: any): Promise<Quote>;
    createQuote(createQuoteDto: CreateQuoteDto): Promise<Quote>;
    updateQuote(id: any, updateQuoteDto: CreateQuoteDto): Promise<Quote>;
    deleteQuote(id: any): Promise<any>;
}
