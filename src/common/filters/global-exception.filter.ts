import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.error('An exception occurred:', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const { status, message } = exception;
    response.status(status || 500).json({
      statusCode: status || 500,
      message: message || 'Internal Server Error',
    });
  }
}
