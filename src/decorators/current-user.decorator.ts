import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/base/interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user as User;
  },
);
