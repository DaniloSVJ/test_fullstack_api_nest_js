import { PrismaClient } from '@prisma/client';

export const prismaMock = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./dev.db',
    },
  },
});
