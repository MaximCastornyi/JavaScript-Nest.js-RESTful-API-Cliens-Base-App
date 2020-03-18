import { Quote } from './interfaces/quote.interface';
import { Model } from 'mongoose';
export declare class QuotesService {
    private readonly quoteModel;
    constructor(quoteModel: Model<Quote>);
    getQuotes(): Promise<Quote[]>;
    getQuote(id: string): Promise<Quote>;
    createQuote(quote: Quote): Promise<Quote>;
    updateQuote(id: string, updateQuoteDto: any): Promise<Quote>;
    deleteQuote(id: string): Promise<any>;
}
