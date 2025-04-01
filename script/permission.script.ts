import * as permissionConst from './const/permission.const';
import { PrismaClient } from '@prisma/client';

export async function permissions() {
  console.log(`Permissions found : `, Object.keys(permissionConst).length);
  const prisma = new PrismaClient();
  const keys = Object.keys(permissionConst);
  const dbTransaction: any[] = [];
  keys.forEach((it) => {
    let name = permissionConst[it];
    dbTransaction.push(
      prisma.permission.upsert({
        where: { name },
        create: { name },
        update: { name },
        select: { name: true },
      }),
    );
  });
  const result = await prisma.$transaction(dbTransaction);
  console.log(`Permissions loaded successfully : `, result.length);
}
permissions();
