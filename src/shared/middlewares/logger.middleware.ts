import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    Logger.log('client-base API Request: ' + req.baseUrl + req.url);
    next();
  }
}
