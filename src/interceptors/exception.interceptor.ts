import {
  Catch,
  HttpException,
  HttpStatus,
  type ExceptionFilter,
  type ArgumentsHost,
} from '@nestjs/common';
import { type Response } from 'express';
import { I18nContext } from 'nestjs-i18n';


/**
 * @remarks This class is an interceptor for the HttpException.
 * @param exception - The exception to be caught.
 * @param host - The host to be used.
 * @returns The response.
 * @alpha
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  async catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const i18n = I18nContext.current(host);
    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    if (typeof exception.getResponse() === 'object') {
      response.status(statusCode).send(exception.getResponse());
    } else {
      const message = await i18n?.t(`translation.${exception.message}`);
      response.status(statusCode).json({
        statusCode,
        message,
      });
    }
  }
}
