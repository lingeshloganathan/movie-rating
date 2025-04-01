import { PrismaClient } from '@prisma/client';
import { rolesData } from './const/role.const';

export async function roles() {
  const prisma = new PrismaClient();
  const dbTransaction: any[] = [];
  console.log(`Roles found : ${rolesData.length}`);
  for (const data of rolesData) {
    dbTransaction.push(
      prisma.role.upsert({
        where: { name: data.name },
        create: {
          name: data.name,
          permissions: {
            connect: data.permissions,
          },
        },
        update: {
          name: data.name,
          permissions: {
            set: data.permissions,
          },
        },
      }),
    );
  }
  const result = await prisma.$transaction(dbTransaction);
  console.log(`Roles loaded successfully : ${result.length}`);
}
roles();
