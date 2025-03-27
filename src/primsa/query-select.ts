import { Prisma } from '@prisma/client';

export const createUserSelect: Prisma.UserSelect = {
  id: true,
  name: true,
  email: true,
  countryCode: true,
  phoneNumber: true,
  gender: true,
};

export const userSelect: Prisma.UserSelect = {
  id: true,
  name: true,
  phoneNumber: true,
  role: {
    select: {
      id: true,
      name: true,
      permissions: {
        select: {
          name: true,
        },
      },
    },
  },
};
