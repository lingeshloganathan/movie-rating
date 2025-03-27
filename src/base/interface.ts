import { Permission } from '@prisma/client';

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export interface User {
  id: string;
  role: Role;
  name: string;
}

export interface JwtPayload {
  userId: string;
  role: Role;
}
