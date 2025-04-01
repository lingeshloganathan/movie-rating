import { ADMIN, USER } from './const';
import { admin, user } from './role-permission.mapper';
const PermissionMapper = (Permissions: string[]) =>
  Permissions.map((it) => ({ name: it }));

export const rolesData = [
  {
    name: ADMIN,
    permissions: PermissionMapper(admin),
  },
  {
    name: USER,
    permissions: PermissionMapper(user),
  },
];
